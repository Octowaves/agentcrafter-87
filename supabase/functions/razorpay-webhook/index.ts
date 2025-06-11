
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { crypto } from "https://deno.land/std@0.168.0/crypto/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const razorpayWebhookSecret = Deno.env.get('RAZORPAY_WEBHOOK_SECRET')
    if (!razorpayWebhookSecret) {
      throw new Error('Razorpay webhook secret not configured')
    }

    // Verify webhook signature
    const body = await req.text()
    const signature = req.headers.get('X-Razorpay-Signature')
    
    if (!signature) {
      throw new Error('No signature provided')
    }

    // Verify signature
    const expectedSignature = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(body + razorpayWebhookSecret)
    )
    const expectedHex = Array.from(new Uint8Array(expectedSignature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    if (signature !== expectedHex) {
      throw new Error('Invalid signature')
    }

    const payload = JSON.parse(body)
    const event = payload.event
    const subscription = payload.payload.subscription?.entity
    const payment = payload.payload.payment?.entity

    console.log('Received webhook event:', event)

    switch (event) {
      case 'subscription.activated':
        await supabaseClient.rpc('update_subscription_status', {
          p_razorpay_subscription_id: subscription.id,
          p_status: 'active',
          p_current_period_start: new Date(subscription.current_start * 1000).toISOString(),
          p_current_period_end: new Date(subscription.current_end * 1000).toISOString(),
        })
        break

      case 'subscription.charged':
        // Update subscription with new billing period
        await supabaseClient.rpc('update_subscription_status', {
          p_razorpay_subscription_id: subscription.id,
          p_status: 'active',
          p_current_period_start: new Date(subscription.current_start * 1000).toISOString(),
          p_current_period_end: new Date(subscription.current_end * 1000).toISOString(),
        })
        break

      case 'subscription.cancelled':
        await supabaseClient.rpc('update_subscription_status', {
          p_razorpay_subscription_id: subscription.id,
          p_status: 'cancelled',
        })
        break

      case 'subscription.paused':
        await supabaseClient.rpc('update_subscription_status', {
          p_razorpay_subscription_id: subscription.id,
          p_status: 'paused',
        })
        break

      case 'payment.failed':
        if (payment.subscription_id) {
          await supabaseClient.rpc('update_subscription_status', {
            p_razorpay_subscription_id: payment.subscription_id,
            p_status: 'past_due',
          })
        }
        break

      default:
        console.log('Unhandled event type:', event)
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
