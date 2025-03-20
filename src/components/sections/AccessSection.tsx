
import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import AccessForm from '@/components/AccessForm';

const AccessSection: React.FC = () => {
  const benefits = [
    'Comprehensive federal sales guidance',
    'Access to all five specialized chatbots',
    'Automated report generation',
    'Community support and networking'
  ];

  return (
    <section id="access" className="py-24 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Shield size={14} className="mr-2" /> Exclusive Access
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Join Our Mighty Networks Community
              </h2>
              <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
                This federal sales advisory system is available exclusively to members of our Mighty Networks community. Gain access to our chatbot system, expert guidance, and a community of federal sales professionals.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ChevronRight size={16} className="text-primary" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          
          <AccessForm className="lg:ml-8" />
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
