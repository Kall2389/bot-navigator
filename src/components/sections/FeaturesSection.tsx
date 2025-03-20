
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, BarChart, Clock, MessageSquare, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Technical Need Assessment",
      description: "Evaluate your solution's compliance with federal technical requirements and identify necessary adjustments."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Funding Identification",
      description: "Discover potential funding sources and align your approach with federal budget cycles and appropriations."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Procurement Strategy",
      description: "Develop a tailored procurement strategy leveraging appropriate contract vehicles and competition approaches."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Acquisition Support",
      description: "Navigate complex federal acquisition processes with guidance on capture management and opportunity tracking."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Deal Execution",
      description: "Finalize your federal sale with expert guidance on proposal development, pricing strategies, and contract execution."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Custom Reports",
      description: "Receive personalized strategy documents with visual workflow diagrams and actionable recommendations."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Federal Sales Support</h2>
          <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
            Our multi-bot system guides you through every aspect of the federal sales process with personalized recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border border-border/20 bg-white shadow-sm transition-all hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
