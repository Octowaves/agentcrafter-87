
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Star, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Billing = () => {
  const { user, profile, isLoading } = useAuth();
  const { toast } = useToast();
  const [isCreatingSubscription, setIsCreatingSubscription] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  // If user already has active subscription, redirect to dashboard
  if (profile?.subscription_active) {
    return <Navigate to="/dashboard" replace />;
  }

  const features = [
    "Access to Agent Prompter tool",
    "Ready-made templates for common agent types",
    "Export prompts to any LLM platform",
    "Save and organize your prompt library",
    "Priority customer support",
    "Regular updates and new features"
  ];

  const handleSubscribe = async () => {
    setIsCreatingSubscription(true);

    try {
      // Create subscription on your backend
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id,
          plan: 'monthly_5_99',
        }),
      });

      const { subscription_id, customer_id } = await response.json();

      const options = {
        key: 'rzp_test_your_key_here', // Replace with your Razorpay key
        subscription_id: subscription_id,
        name: 'Agent Crafter',
        description: 'Monthly Subscription - $5.99/month',
        handler: function (response: any) {
          toast({
            title: "Payment Successful!",
            description: "Welcome to Agent Crafter Pro! Redirecting to dashboard...",
          });
          
          // Redirect to dashboard after successful payment
          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 2000);
        },
        prefill: {
          email: user.email,
        },
        theme: {
          color: '#3B82F6',
        },
        modal: {
          ondismiss: function() {
            setIsCreatingSubscription(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error creating subscription:', error);
      toast({
        title: "Error",
        description: "Failed to initiate subscription. Please try again.",
        variant: "destructive",
      });
      setIsCreatingSubscription(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              A
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscribe to Access Agent Crafter</h1>
          <p className="text-gray-600">Unlock the full power of AI agent development</p>
        </div>

        <Card className="border-2 border-blue-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center rounded-t-lg">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 mr-1" />
              <span className="text-sm font-semibold">PRO PLAN</span>
            </div>
            <CardTitle className="text-2xl">$5.99<span className="text-base font-normal">/month</span></CardTitle>
            <CardDescription className="text-blue-100">
              Everything you need to build intelligent AI agents
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6">
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1.5 rounded-full mr-3 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={handleSubscribe}
              disabled={isCreatingSubscription}
              className="w-full py-3 text-base font-semibold shadow-lg"
              size="lg"
            >
              {isCreatingSubscription ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Subscribe Now
                </>
              )}
            </Button>
            
            <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-1" />
              Secure payment powered by Razorpay
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              By subscribing, you agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
