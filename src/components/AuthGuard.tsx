
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  requireAuth: boolean;
}

const AuthGuard = ({ requireAuth }: AuthGuardProps) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-prompter-600" />
      </div>
    );
  }
  
  // If requireAuth is true and user is not logged in, redirect to sign-in
  if (requireAuth && !user) {
    return <Navigate to="/sign-in" replace />;
  }
  
  // If requireAuth is false and user is logged in, redirect to dashboard
  if (!requireAuth && user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <Outlet />;
};

export default AuthGuard;
