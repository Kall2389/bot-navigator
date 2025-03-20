
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AccessSection from '@/components/sections/AccessSection';
import CTASection from '@/components/sections/CTASection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <AccessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
