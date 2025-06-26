
import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const SpaceAnimations = () => {
  const [rockets, setRockets] = useState<Array<{ id: number; x: number; y: number; targetX: number; targetY: number; active: boolean }>>([]);

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
    </>
  );
};

export default SpaceAnimations;
