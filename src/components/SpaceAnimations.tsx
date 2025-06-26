
import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const SpaceAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rockets, setRockets] = useState<Array<{ id: number; x: number; y: number; targetX: number; targetY: number; active: boolean }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Create rockets periodically
    const rocketInterval = setInterval(() => {
      const newRocket = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * (window.innerHeight / 2),
        active: true
      };
      
      setRockets(prev => [...prev.slice(-4), newRocket]);
      
      // Remove rocket after animation
      setTimeout(() => {
        setRockets(prev => prev.filter(r => r.id !== newRocket.id));
      }, 4000);
    }, 3000);

    return () => clearInterval(rocketInterval);
  }, []);

  return (
    <>
      {/* Custom Mouse Cursor with Nitro Effect */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: mousePosition.x - 10, 
          top: mousePosition.y - 10,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="relative">
          <div className="w-5 h-5 bg-github-accent rounded-full opacity-80" />
          <div className="absolute inset-0 w-5 h-5 bg-github-green rounded-full animate-ping opacity-40" />
          <div className="absolute -inset-2 w-9 h-9 bg-gradient-to-r from-github-purple to-github-accent rounded-full opacity-20 animate-pulse" />
        </div>
      </div>

      {/* Floating Astronaut */}
      <div className="fixed top-20 right-20 z-10 animate-bounce opacity-60 pointer-events-none hidden lg:block">
        <div className="text-6xl transform rotate-12">
          🧑‍🚀
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-github-accent/20 to-github-purple/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="fixed bottom-32 left-16 z-10 animate-bounce opacity-60 pointer-events-none hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="text-5xl transform -rotate-12">
          👨‍🚀
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-github-green/20 to-github-orange/20 rounded-full blur-xl animate-pulse" />
      </div>

      {/* Flying Rockets */}
      {rockets.map(rocket => (
        <div
          key={rocket.id}
          className="fixed pointer-events-none z-10"
          style={{
            left: rocket.x,
            top: rocket.y,
            transform: `rotate(${Math.atan2(rocket.targetY - rocket.y, rocket.targetX - rocket.x) * 180 / Math.PI + 90}deg)`,
            animation: `rocketFly 4s ease-in-out forwards`
          }}
        >
          <Rocket className="w-6 h-6 text-github-accent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-github-orange via-github-accent to-transparent blur-sm opacity-60 animate-pulse" />
        </div>
      ))}

      {/* Floating Stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-github-accent rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes rocketFly {
          0% {
            transform: translateX(0) translateY(0) rotate(var(--rotation));
          }
          100% {
            transform: translateX(${rockets[0]?.targetX - rockets[0]?.x || 0}px) translateY(${rockets[0]?.targetY - rockets[0]?.y || 0}px) rotate(var(--rotation));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SpaceAnimations;
