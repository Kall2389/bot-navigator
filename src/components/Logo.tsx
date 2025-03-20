
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
  const isSmall = variant === 'small';
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/70 text-white",
        isSmall ? "w-8 h-8" : "w-10 h-10"
      )}>
        <div className="absolute inset-0 flex items-center justify-center font-bold">
          FS
        </div>
        <div className="absolute inset-0 bg-white/10 blur-sm" />
      </div>
      
      {!isSmall && (
        <h1 className={cn(
          "ml-3 font-semibold tracking-tight",
          isSmall ? "text-base" : "text-xl"
        )}>
          Federal Sales Advisor
        </h1>
      )}
    </div>
  );
};

export default Logo;
