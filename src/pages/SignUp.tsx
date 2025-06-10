
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthLayout from '@/components/auth/AuthLayout';
import SignUpForm from '@/components/auth/SignUpForm';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { user, isLoading } = useAuth();
  
  // If the user is already logged in, redirect to dashboard
  if (user && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <AuthLayout 
      title="Create your free account" 
      description="Craft intelligent, reliable AI agents faster"
      footer={
        <div className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-prompter-600 hover:underline font-medium">
            Sign in
          </Link>
        </div>
      }
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
