
import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SplashScreen from '@/components/SplashScreen';
import CommandInput from '@/components/CommandInput';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showCommand, setShowCommand] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '`' && e.ctrlKey) {
        e.preventDefault();
        setShowCommand(!showCommand);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showCommand]);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-github-bg text-github-text">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {showCommand && <CommandInput onClose={() => setShowCommand(false)} />}
      
      {/* Easter egg hint */}
      <div className="fixed bottom-4 right-4 text-xs text-github-text/50 font-mono">
        Press Ctrl + ` for console
      </div>
    </div>
  );
};

export default Index;
