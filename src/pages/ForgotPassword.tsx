
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthLayout from '@/components/auth/AuthLayout';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const { user, isLoading } = useAuth();
  
  // If the user is already logged in, redirect to dashboard
  if (user && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <AuthLayout 
      title="Forgot password" 
      description="Enter your email and we'll send you a reset link"
      footer={
        <div className="text-center mt-4">
          Remember your password?{' '}
          <Link to="/sign-in" className="text-prompter-600 hover:underline font-medium">
            Sign in
          </Link>
        </div>
      }
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
