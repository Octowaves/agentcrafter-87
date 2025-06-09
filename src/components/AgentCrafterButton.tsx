
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
};

const AgentCrafterButton = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chakra-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 transform hover:scale-105 active:scale-95 cursor-pointer';
  
  const variants = {
    primary: 'bg-chakra-blue-500 text-white hover:bg-chakra-blue-600 shadow-chakra-md hover:shadow-chakra-lg',
    secondary: 'bg-chakra-gray-100 text-chakra-gray-800 hover:bg-chakra-gray-200 shadow-chakra-sm hover:shadow-chakra-md border border-chakra-gray-200',
    outline: 'border border-chakra-gray-300 bg-white text-chakra-gray-700 hover:bg-chakra-gray-50 shadow-chakra-sm hover:shadow-chakra-md',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-8 px-3 py-1 text-xs',
    lg: 'h-12 px-6 py-3 text-base',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AgentCrafterButton;
