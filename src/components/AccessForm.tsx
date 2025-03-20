
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface AccessFormProps {
  className?: string;
}

const AccessForm: React.FC<AccessFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request Submitted",
        description: "We've received your access request. You'll hear from us shortly.",
      });
      setIsSubmitting(false);
      setEmail('');
      setName('');
      setCompany('');
    }, 1500);
  };

  return (
    <div className={className}>
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-6">Request Exclusive Access</h3>
        <p className="text-muted-foreground mb-6">
          This federal sales advisory system is available exclusively to Mighty Networks members. 
          Complete the form below to request access.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-white/50 border-border/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@company.com"
              required
              className="bg-white/50 border-border/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company"
              required
              className="bg-white/50 border-border/50"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-6 btn-premium"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Access'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
