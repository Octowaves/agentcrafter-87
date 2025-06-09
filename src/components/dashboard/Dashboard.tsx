
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from './DashboardHeader';
import AgentPrompter from './AgentPrompter';
import ToolsGrid from './ToolsGrid';
import UserDetailsForm from '@/components/UserDetailsForm';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, profile, isLoading } = useAuth();
  const [userDetailsCompleted, setUserDetailsCompleted] = useState(false);
  const [checkingDetails, setCheckingDetails] = useState(true);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && user) {
      // Only show user details form if profile is missing required fields
      if (profile) {
        const hasRequiredFields = profile.full_name && 
                                 profile.email && 
                                 profile.country && 
                                 profile.date_of_birth;
        setUserDetailsCompleted(hasRequiredFields);
      } else {
        // If no profile exists, user needs to complete details
        setUserDetailsCompleted(false);
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
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // If user hasn't completed their details, show the form
  if (user && !userDetailsCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <UserDetailsForm onComplete={handleUserDetailsComplete} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        <main>
          {selectedTool === 'agent-prompter' ? (
            <AgentPrompter onBack={() => setSelectedTool(null)} />
          ) : (
            <ToolsGrid onSelectTool={setSelectedTool} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
