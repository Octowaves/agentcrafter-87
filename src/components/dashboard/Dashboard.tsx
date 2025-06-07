
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import PromptGenerator from './PromptGenerator';
import PromptsHistory from './PromptsHistory';
import UserDetailsForm from '@/components/UserDetailsForm';

interface UserDetails {
  fullName: string;
  email: string;
  country: string;
  dateOfBirth: string;
}

const Dashboard = () => {
  const [isCreatingPrompt, setIsCreatingPrompt] = useState(false);
  const [userDetailsCompleted, setUserDetailsCompleted] = useState(false);
  
  const handleUserDetailsComplete = (details: UserDetails) => {
    console.log('User details completed:', details);
    setUserDetailsCompleted(true);
  };

  // Show user details form if not completed
  if (!userDetailsCompleted) {
    return (
      <div className="container max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-prompter-600 rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-4">A</div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome to Agentcrafter</h1>
          </div>
          <UserDetailsForm onComplete={handleUserDetailsComplete} />
        </div>
      </div>
    );
  }
  
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <DashboardHeader />
      
      {!isCreatingPrompt ? (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Your Prompts</h2>
          <Button onClick={() => setIsCreatingPrompt(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Prompt
          </Button>
        </div>
      ) : (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create New Prompt</h2>
          <Button variant="outline" onClick={() => setIsCreatingPrompt(false)}>
            Cancel
          </Button>
        </div>
      )}
      
      {isCreatingPrompt ? (
        <PromptGenerator />
      ) : null}
      
      <PromptsHistory />
    </div>
  );
};

export default Dashboard;
