
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import WorkflowVisual from '@/components/WorkflowVisual';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 px-4 bg-gradient-to-b from-secondary/10 to-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">The Federal Sales Process</h2>
          <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
            Our system guides you through these five critical steps to federal sales success, with seamless transitions between specialized chatbots.
          </p>
        </div>
        
        <WorkflowVisual className="mb-16" />
        
        <Card className="border border-border/20 bg-white shadow-md">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Integrated Automation</h3>
                <p className="text-foreground/70 mb-6">
                  Our system doesn't just provide advice—it takes action. Through integration with Make.com or Zapier, we automate document generation, create visual workflows, and deliver custom reports directly to your inbox.
                </p>
                <ul className="space-y-3">
                  {['Automated Google Docs reports', 'Mermaid.js workflow visualizations', 'Email delivery of strategies', 'Zapier/Make.com integration'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ChevronRight size={12} className="text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-96 bg-white rounded-xl overflow-hidden border border-border/20 shadow-md">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')] bg-cover bg-center opacity-80"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProcessSection;
