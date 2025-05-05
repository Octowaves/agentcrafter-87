
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footer?: React.ReactNode;
}

const AuthLayout = ({ children, title, description, footer }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-prompter-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="text-2xl font-bold text-gray-900">Prompter</span>
          </Link>
        </div>
        
        <Card className="shadow-lg border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
          {footer && <CardFooter className="flex flex-col">{footer}</CardFooter>}
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
