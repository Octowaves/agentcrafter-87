
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import SettingsLayout from '@/components/settings/SettingsLayout';
import { Loader2 } from 'lucide-react';

const Settings = () => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (!user && !isLoading) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return <SettingsLayout />;
};

export default Settings;
