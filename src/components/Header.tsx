
import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-5 px-4 sm:px-6 backdrop-blur-sm bg-white/80 border-b border-border/40 sticky top-0 z-50", className)}>
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <nav className="flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#process" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Process
          </a>
          <a href="#access" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Access
          </a>
          <Button variant="outline" className="bg-white/50 text-primary hover:bg-primary hover:text-white">
            Member Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
