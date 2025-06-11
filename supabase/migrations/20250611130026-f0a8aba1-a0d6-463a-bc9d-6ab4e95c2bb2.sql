
-- Add subscription-related columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS subscription_active BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT 'monthly',
ADD COLUMN IF NOT EXISTS subscription_start_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS next_billing_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS razorpay_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS razorpay_customer_id TEXT;

-- Create a subscriptions table for detailed tracking
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  razorpay_subscription_id TEXT UNIQUE,
  razorpay_customer_id TEXT,
  plan_id TEXT NOT NULL DEFAULT 'monthly_5_99',
  status TEXT NOT NULL DEFAULT 'created', -- created, active, paused, cancelled
  amount INTEGER NOT NULL DEFAULT 599, -- in cents
  currency TEXT NOT NULL DEFAULT 'USD',
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create billing_addresses table
CREATE TABLE IF NOT EXISTS public.billing_addresses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  street_address TEXT,
  city TEXT,
  country TEXT,
  zip_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on new tables
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.billing_addresses ENABLE ROW LEVEL SECURITY;

-- RLS policies for subscriptions
CREATE POLICY "Users can view their own subscriptions" 
  ON public.subscriptions 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscriptions" 
  ON public.subscriptions 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscriptions" 
  ON public.subscriptions 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- RLS policies for billing_addresses
CREATE POLICY "Users can view their own billing address" 
  ON public.billing_addresses 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own billing address" 
  ON public.billing_addresses 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own billing address" 
  ON public.billing_addresses 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create function to handle subscription updates
CREATE OR REPLACE FUNCTION public.update_subscription_status(
  p_razorpay_subscription_id TEXT,
  p_status TEXT,
  p_current_period_start TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  p_current_period_end TIMESTAMP WITH TIME ZONE DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  subscription_record RECORD;
BEGIN
  -- Update subscription record
  UPDATE public.subscriptions 
  SET 
    status = p_status,
    current_period_start = COALESCE(p_current_period_start, current_period_start),
    current_period_end = COALESCE(p_current_period_end, current_period_end),
    updated_at = now()
  WHERE razorpay_subscription_id = p_razorpay_subscription_id
  RETURNING * INTO subscription_record;

  -- Update profile subscription status
  IF subscription_record.user_id IS NOT NULL THEN
    UPDATE public.profiles 
    SET 
      subscription_active = (p_status = 'active'),
      next_billing_date = subscription_record.current_period_end,
      updated_at = now()
    WHERE id = subscription_record.user_id;
    
    RETURN TRUE;
  END IF;
  
  RETURN FALSE;
END;
$$;
