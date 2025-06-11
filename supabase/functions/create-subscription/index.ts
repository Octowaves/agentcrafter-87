
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

    const { user_id, plan } = await req.json()

    // Get user data
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      throw new Error('Unauthorized')
    }

    // Razorpay API credentials (you'll need to set these as secrets)
    const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID')
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET')

    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error('Razorpay credentials not configured')
    }

    // Create Razorpay customer
    const customerResponse = await fetch('https://api.razorpay.com/v1/customers', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.user_metadata?.full_name || user.email,
        email: user.email,
      }),
    })

    const customer = await customerResponse.json()

    // Create Razorpay subscription
    const subscriptionResponse = await fetch('https://api.razorpay.com/v1/subscriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id: 'plan_monthly_5_99', // You'll need to create this plan in Razorpay dashboard
        customer_id: customer.id,
        total_count: 0, // Infinite subscription
        quantity: 1,
      }),
    })

    const subscription = await subscriptionResponse.json()

    // Store subscription in database
    const { error: dbError } = await supabaseClient
      .from('subscriptions')
      .insert({
        user_id: user.id,
        razorpay_subscription_id: subscription.id,
        razorpay_customer_id: customer.id,
        plan_id: plan,
        status: 'created',
        amount: 599, // $5.99 in cents
        currency: 'USD',
      })

    if (dbError) {
      throw dbError
    }

    return new Response(
      JSON.stringify({
        subscription_id: subscription.id,
        customer_id: customer.id,
      }),
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
