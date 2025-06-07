
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthLayout from '@/components/auth/AuthLayout';
import SignInForm from '@/components/auth/SignInForm';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const { user, isLoading } = useAuth();
  
  // If the user is already logged in, redirect to dashboard
  if (user && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <AuthLayout 
      title="Welcome back to Agentcrafter" 
      description="Sign in to your account"
      footer={
        <div className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-prompter-600 hover:underline font-medium">
            Sign up for free
          </Link>
        </div>
      }
    >
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
