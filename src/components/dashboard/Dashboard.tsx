
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from './DashboardHeader';
import PromptGenerator from './PromptGenerator';
import PromptsHistory from './PromptsHistory';
import UserDetailsForm from '@/components/UserDetailsForm';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, profile, isLoading } = useAuth();
  const [userDetailsCompleted, setUserDetailsCompleted] = useState(false);
  const [checkingDetails, setCheckingDetails] = useState(true);

  useEffect(() => {
    if (!isLoading && user) {
      // Check if user has completed their profile
      if (user.email_confirmed_at && profile) {
        // Check if profile has all required fields
        const hasRequiredFields = profile.full_name && 
                                 profile.email && 
                                 profile.country && 
                                 profile.date_of_birth;
        setUserDetailsCompleted(hasRequiredFields);
      }
      setCheckingDetails(false);
    }
  }, [user, profile, isLoading]);

  const handleUserDetailsComplete = (details: any) => {
    setUserDetailsCompleted(true);
  };

  if (isLoading || checkingDetails) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-prompter-600" />
      </div>
    );
  }

  // If user hasn't confirmed their email, show message to check email
  if (user && !user.email_confirmed_at) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Please verify your email</h2>
          <p className="text-gray-600 mb-4">
            We've sent you a confirmation link. Please check your email and click the link to verify your account.
          </p>
          <p className="text-sm text-gray-500">
            After clicking the link, you'll be automatically redirected to the dashboard.
          </p>
        </div>
      </div>
    );
  }

  // If user hasn't completed their details, show the form
  if (user && user.email_confirmed_at && !userDetailsCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <UserDetailsForm onComplete={handleUserDetailsComplete} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PromptGenerator />
          </div>
          <div className="lg:col-span-1">
            <PromptsHistory />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
