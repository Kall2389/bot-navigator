
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Zap } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';

const HeroSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap size={14} className="mr-2" /> Expert Federal Sales Guidance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Navigate Federal Sales With Confidence
              </h1>
              <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
                Our intelligent chatbot system leverages two decades of federal contracting expertise to guide IT companies through the complex federal sales process.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Get Started <ChevronRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/50">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float lg:ml-8">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent rounded-3xl"></div>
            <Card className="overflow-hidden border border-white/30 shadow-lg">
              <ChatInterface className="p-6" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
