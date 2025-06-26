
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quest Accepted! 🎮",
      description: "Your message has been sent to Hanish's terminal. Expect a response soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-github-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-github-accent">
          &lt;ping_terminal&gt;
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="bg-github-secondary border-github-border p-8 animate-fade-in">
            <div className="space-y-6">
              <div className="font-mono">
                <h3 className="text-xl font-semibold mb-4 text-github-purple">
                  $ whoami
                </h3>
                <div className="text-github-text space-y-2">
                  <p><span className="text-github-accent">Name:</span> Hanish B</p>
                  <p><span className="text-github-accent">Location:</span> Coimbatore, India</p>
                  <p><span className="text-github-accent">Status:</span> <span className="text-github-green">Available for opportunities</span></p>
                </div>
              </div>
              
              <div className="font-mono">
                <h3 className="text-xl font-semibold mb-4 text-github-purple">
                  $ ls -la social_links/
                </h3>
                <div className="space-y-2">
                  <a 
                    href="https://github.com/Hanshu110" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-github-accent hover:text-github-green transition-colors"
                  >
                    → github.com/Hanshu110
                  </a>
                  <a 
                    href="#" 
                    className="block text-github-accent hover:text-github-green transition-colors"
                  >
                    → linkedin.com/in/hanish-b
                  </a>
                </div>
              </div>
              
              <div className="bg-github-bg p-4 rounded border border-github-border">
                <p className="font-mono text-github-green text-sm">
                  <span className="text-github-purple">hanish@terminal:~$</span> cat motivation.txt
                </p>
                <p className="font-mono text-github-text text-sm mt-2">
                  "Always excited to collaborate on innovative projects and learn new technologies!"
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="bg-github-secondary border-github-border p-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-github-purple font-mono">
              Send a Quest →
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-github-text mb-2">
                  Player Name:
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-github-bg border-github-border text-github-text font-mono focus:border-github-accent"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-github-text mb-2">
                  Email Address:
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-github-bg border-github-border text-github-text font-mono focus:border-github-accent"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-github-text mb-2">
                  Quest Details:
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-github-bg border-github-border text-github-text font-mono focus:border-github-accent resize-none"
                  placeholder="Describe your project, collaboration idea, or just say hello..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-github-accent hover:bg-github-accent/80 text-github-bg font-mono font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                Launch Quest 🚀
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
