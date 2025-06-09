
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AccountSettings = () => {
  const { user, profile } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Account Information</h2>
        <p className="text-sm text-gray-600">View and manage your account details</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardDescription>Your account information and status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <p className="mt-1 text-sm text-gray-900">{profile?.full_name || 'Not set'}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <p className="mt-1 text-sm text-gray-900">{profile?.country || 'Not set'}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Status</label>
              <div className="mt-1">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Active
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm">
                Edit Profile Information
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                Delete Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
