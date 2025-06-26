
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    '> Initializing Portfolio of Hanish_B...',
    '> Loading assets...',
    '> Skills... ✓',
    '> Projects... ✓',
    '> Experience... ✓',
    '> Contact... ✓',
    '> Ready.',
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, onComplete]);

  return (
    <div className="min-h-screen bg-github-bg flex items-center justify-center">
      <div className="font-mono text-github-green text-lg max-w-md">
        {lines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="mb-2">
            {line}
          </div>
        ))}
        {currentLine < lines.length && (
          <div className="mb-2">
            {lines[currentLine].slice(0, currentChar)}
            {showCursor && <span className="bg-github-green w-2 h-5 inline-block ml-1 animate-pulse" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
