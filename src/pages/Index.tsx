
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';
import WorkflowVisual from '@/components/WorkflowVisual';
import AccessForm from '@/components/AccessForm';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Shield, Clock, BarChart, MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Zap size={14} className="mr-1" />
                  Expert Federal Sales Guidance
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Navigate Federal Sales With Confidence
                </h1>
                <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
                  Our intelligent chatbot system leverages two decades of federal contracting expertise to guide IT companies through the complex federal sales process.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-premium">
                  <span>Get Started</span>
                  <ChevronRight size={16} className="ml-1" />
                </Button>
                <Button variant="outline" className="bg-white/50">
                  <span>Learn More</span>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float lg:ml-8">
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent rounded-3xl"></div>
              <div className="glass-card rounded-3xl shadow-premium overflow-hidden border border-white/30">
                <ChatInterface className="p-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Federal Sales Support</h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
              Our multi-bot system guides you through every aspect of the federal sales process with personalized recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl flex flex-col h-full animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The Federal Sales Process</h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
              Our system guides you through these five critical steps to federal sales success, with seamless transitions between specialized chatbots.
            </p>
          </div>
          
          <WorkflowVisual className="mb-16" />
          
          <div className="glass-card rounded-2xl p-8 md:p-12">
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card rounded-xl overflow-hidden h-96 bg-white/20 border border-border/30 shadow-premium">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')] bg-cover bg-center opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Access Section */}
      <section id="access" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Shield size={14} className="mr-1" />
                  Exclusive Access
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Join Our Mighty Networks Community
                </h2>
                <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
                  This federal sales advisory system is available exclusively to members of our Mighty Networks community. Gain access to our chatbot system, expert guidance, and a community of federal sales professionals.
                </p>
              </div>
              
              <div className="space-y-4">
                {['Comprehensive federal sales guidance', 'Access to all five specialized chatbots', 'Automated report generation', 'Community support and networking'].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <ChevronRight size={16} className="text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <AccessForm className="lg:ml-8" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Federal Sales Approach?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Join our community today to access our intelligent chatbot system and start navigating the federal sales process with confidence.
            </p>
            <Button className="btn-premium text-lg px-8 py-6">
              <span>Request Access Now</span>
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
