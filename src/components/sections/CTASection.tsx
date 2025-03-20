
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-secondary/10">
      <div className="container max-w-7xl mx-auto">
        <Card className="border border-border/20 bg-white shadow-lg text-center p-8 md:p-12">
          <CardContent>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Federal Sales Approach?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Join our community today to access our intelligent chatbot system and start navigating the federal sales process with confidence.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
              Request Access Now <ChevronRight size={18} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
