
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-github-accent rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-github-green rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-github-purple rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-github-orange rounded-full animate-pulse delay-1000" />
      </div>

      <div className="text-center z-10 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-github-accent via-github-purple to-github-green bg-clip-text text-transparent">
            Hanish B
          </h1>
          <p className="text-xl md:text-2xl text-github-text/80 font-mono mb-2">
            &lt;Computer Science Engineer /&gt;
          </p>
          <p className="text-lg text-github-text/60 max-w-2xl mx-auto">
            Final Year B.E. CSE student passionate about Machine Learning and Software Development
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/Hanshu110"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-github-secondary border border-github-border rounded-lg hover:bg-github-tertiary transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Github className="w-6 h-6 text-github-text" />
          </a>
          <a
            href="https://www.linkedin.com/in/hanish-b-ba4928285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-github-secondary border border-github-border rounded-lg hover:bg-github-tertiary transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Linkedin className="w-6 h-6 text-github-text" />
          </a>
        </div>

        <div className="font-mono text-github-green text-sm animate-pulse">
          <p>&gt; Ready to build amazing things...</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
