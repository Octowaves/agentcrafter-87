
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

    // Razorpay API credentials
    const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID')
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET')

    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error('Razorpay credentials not configured')
    }

    console.log('Creating subscription for user:', user.id)

    let customerId;

    // First, try to get existing customer by email
    const existingCustomerResponse = await fetch(`https://api.razorpay.com/v1/customers?email=${encodeURIComponent(user.email)}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
        'Content-Type': 'application/json',
      },
    })

    if (existingCustomerResponse.ok) {
      const existingCustomers = await existingCustomerResponse.json()
      if (existingCustomers.items && existingCustomers.items.length > 0) {
        customerId = existingCustomers.items[0].id
        console.log('Using existing customer:', customerId)
      }
    }

    // If no existing customer found, create a new one
    if (!customerId) {
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

      if (!customerResponse.ok) {
        const errorText = await customerResponse.text()
        console.error('Razorpay customer creation failed:', errorText)
        throw new Error('Failed to create customer with Razorpay')
      }

      const customer = await customerResponse.json()
      customerId = customer.id
      console.log('New customer created:', customerId)
    }

    // Create Razorpay subscription
    const subscriptionResponse = await fetch('https://api.razorpay.com/v1/subscriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customerId,
        total_count: 0, // Infinite subscription
        quantity: 1,
        start_at: Math.floor(Date.now() / 1000), // Start now
        plan: {
          interval: 1,
          period: 'monthly',
          item: {
            name: 'Agent Crafter Pro',
            amount: 59900, // ₹599 in paise (smallest currency unit)
            currency: 'INR'
          }
        }
      }),
    })

    if (!subscriptionResponse.ok) {
      const errorText = await subscriptionResponse.text()
      console.error('Razorpay subscription creation failed:', errorText)
      throw new Error('Failed to create subscription with Razorpay')
    }

    const subscription = await subscriptionResponse.json()
    console.log('Subscription created:', subscription.id)

    // Store subscription in database
    const { error: dbError } = await supabaseClient
      .from('subscriptions')
      .insert({
        user_id: user.id,
        razorpay_subscription_id: subscription.id,
        razorpay_customer_id: customerId,
        plan_id: plan,
        status: 'created',
        amount: 599, // ₹599 in rupees
        currency: 'INR',
      })

    if (dbError) {
      console.error('Database error:', dbError)
      throw dbError
    }

    console.log('Subscription stored in database successfully')

    return new Response(
      JSON.stringify({
        subscription_id: subscription.id,
        customer_id: customerId,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Create subscription error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
