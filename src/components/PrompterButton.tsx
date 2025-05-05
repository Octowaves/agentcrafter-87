
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
};

const PrompterButton = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50';
  
  const variants = {
    primary: 'bg-prompter-600 text-white hover:bg-prompter-700 shadow-lg shadow-prompter-500/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'h-12 px-6 py-2 text-base',
    sm: 'h-9 px-4 py-1 text-sm',
    lg: 'h-14 px-8 py-3 text-lg',
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

export default PrompterButton;
