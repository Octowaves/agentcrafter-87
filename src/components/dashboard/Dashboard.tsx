
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import PromptGenerator from './PromptGenerator';
import PromptsHistory from './PromptsHistory';

const Dashboard = () => {
  const [isCreatingPrompt, setIsCreatingPrompt] = useState(false);
  
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
