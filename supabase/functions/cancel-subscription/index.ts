
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { user_id } = await req.json()

    // Get user data
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user || user.id !== user_id) {
      throw new Error('Unauthorized')
    }

    // Get user's subscription
    const { data: subscription, error: subError } = await supabaseClient
      .from('subscriptions')
      .select('razorpay_subscription_id')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .single()

    if (subError || !subscription) {
      throw new Error('No active subscription found')
    }

    // Razorpay API credentials
    const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID')
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET')

    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error('Razorpay credentials not configured')
    }

    // Cancel subscription in Razorpay
    const cancelResponse = await fetch(
      `https://api.razorpay.com/v1/subscriptions/${subscription.razorpay_subscription_id}/cancel`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cancel_at_cycle_end: 1, // Cancel at the end of the current billing cycle
        }),
      }
    )

    if (!cancelResponse.ok) {
      throw new Error('Failed to cancel subscription with Razorpay')
    }

    // Update subscription status in database
    const { error: updateError } = await supabaseClient
      .from('subscriptions')
      .update({ status: 'cancelled' })
      .eq('razorpay_subscription_id', subscription.razorpay_subscription_id)

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
