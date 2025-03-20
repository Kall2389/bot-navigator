
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-6 px-4 sm:px-6 backdrop-blur-sm bg-white/60 border-b border-border/40 sticky top-0 z-50", className)}>
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">FS</div>
          <h1 className="text-xl font-semibold tracking-tight hidden sm:block">Federal Sales Advisor</h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#process" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Process
          </a>
          <a href="#access" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Access
          </a>
          <button className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Member Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
