
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CreditCard, Calendar, AlertTriangle } from 'lucide-react';

const BillingSettings = () => {
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const [billingAddress, setBillingAddress] = useState({
    full_name: '',
    street_address: '',
    city: '',
    country: '',
    zip_code: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  useEffect(() => {
    fetchBillingAddress();
  }, [user]);

  const fetchBillingAddress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('billing_addresses')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching billing address:', error);
        return;
      }

      if (data) {
        setBillingAddress({
          full_name: data.full_name || '',
          street_address: data.street_address || '',
          city: data.city || '',
          country: data.country || '',
          zip_code: data.zip_code || '',
        });
      }
    } catch (error) {
      console.error('Error fetching billing address:', error);
    }
  };

  const handleUpdateBillingAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('billing_addresses')
        .upsert({
          user_id: user.id,
          ...billingAddress,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Billing address updated successfully",
      });
    } catch (error: any) {
      console.error('Error updating billing address:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update billing address",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    setIsCancelling(true);

    try {
      // Call your backend to cancel subscription with Razorpay
      const response = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user?.id,
        }),
      });

      if (!response.ok) throw new Error('Failed to cancel subscription');

      toast({
        title: "Subscription Cancelled",
        description: "Your subscription has been cancelled. You'll retain access until the end of your billing period.",
      });
    } catch (error) {
      console.error('Error cancelling subscription:', error);
      toast({
        title: "Error",
        description: "Failed to cancel subscription. Please contact support.",
        variant: "destructive",
      });
    } finally {
      setIsCancelling(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Billing & Subscription</h2>
        <p className="text-sm text-gray-600">Manage your subscription and billing information</p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Current Plan
          </CardTitle>
          <CardDescription>Your subscription details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Agent Crafter Pro</p>
              <p className="text-sm text-gray-600">$5.99/month</p>
            </div>
            <Badge variant={profile?.subscription_active ? "default" : "secondary"}>
              {profile?.subscription_active ? "Active" : "Inactive"}
            </Badge>
          </div>
          
          {profile?.next_billing_date && (
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              Next billing date: {formatDate(profile.next_billing_date)}
            </div>
          )}

          {profile?.subscription_active && (
            <div className="pt-4 border-t">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCancelSubscription}
                disabled={isCancelling}
                className="text-red-600 hover:text-red-700"
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                {isCancelling ? 'Cancelling...' : 'Cancel Subscription'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Billing Address */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Address</CardTitle>
          <CardDescription>Update your billing information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdateBillingAddress} className="space-y-4">
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                type="text"
                value={billingAddress.full_name}
                onChange={(e) => setBillingAddress({...billingAddress, full_name: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="street-address">Street Address</Label>
              <Input
                id="street-address"
                type="text"
                value={billingAddress.street_address}
                onChange={(e) => setBillingAddress({...billingAddress, street_address: e.target.value})}
                placeholder="Enter your street address"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  value={billingAddress.city}
                  onChange={(e) => setBillingAddress({...billingAddress, city: e.target.value})}
                  placeholder="Enter your city"
                />
              </div>
              
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  value={billingAddress.country}
                  onChange={(e) => setBillingAddress({...billingAddress, country: e.target.value})}
                  placeholder="Enter your country"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="zip-code">ZIP Code</Label>
              <Input
                id="zip-code"
                type="text"
                value={billingAddress.zip_code}
                onChange={(e) => setBillingAddress({...billingAddress, zip_code: e.target.value})}
                placeholder="Enter your ZIP code"
              />
            </div>
            
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? 'Saving...' : 'Save Billing Address'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingSettings;
