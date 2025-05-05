
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Dashboard from '@/components/dashboard/Dashboard';
import { Loader2 } from 'lucide-react';

const DashboardPage = () => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-prompter-600" />
      </div>
    );
  }
  
  // If user is not logged in, redirect to sign in
  if (!user && !isLoading) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return <Dashboard />;
};

export default DashboardPage;
