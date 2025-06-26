
import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface CommandInputProps {
  onClose: () => void;
}

const CommandInput = ({ onClose }: CommandInputProps) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to Hanish Terminal v1.0',
    'Type ":help" for available commands',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let response: string[] = [];

    switch (cmd) {
      case ':help':
        response = [
          'Available commands:',
          ':about_me - Show developer info',
          ':skills - List technical skills',
          ':projects - Show recent projects',
          ':contact - Display contact information',
          ':clear - Clear terminal',
          ':exit - Close terminal'
        ];
        break;
      case ':about_me':
        response = [
          '┌─ DEVELOPER PROFILE ─┐',
          '│ Name: Hanish B      │',
          '│ Role: CSE Student   │',
          '│ Year: Final Year    │',
          '│ College: KCE        │',
          '│ Passion: ML & Dev   │',
          '└─────────────────────┘'
        ];
        break;
      case ':skills':
        response = [
          'Technical Arsenal:',
          '• Languages: Python, Java',
          '• Web: HTML, CSS, JavaScript',
          '• Database: MySQL', 
          '• Tools: GitHub, Docker, Streamlit',
          '• AI/ML: OpenCV, NumPy, Pandas',
          '• Core: DSA, OOP, REST APIs'
        ];
        break;
      case ':projects':
        response = [
          'Recent Projects:',
          '1. Text-to-Video AI - AI-powered video generation',
          '2. Image Colorization - Deep learning project',
          '3. Task Portal - Full-stack web app',
          '4. Spider-Man Game - Python game development',
          '5. ScanMate - OCR utility tool',
          '6. Pacman Clone - Classic game recreation'
        ];
        break;
      case ':contact':
        response = [
          'Contact Information:',
          '📧 Email: Available on request',
          '📍 Location: Coimbatore, India',
          '🔗 GitHub: github.com/Hanshu110',
          '💼 LinkedIn: Available on request',
          '💬 Status: Open to opportunities'
        ];
        break;
      case ':clear':
        setOutput(['Welcome to Hanish Terminal v1.0', 'Type ":help" for available commands', '']);
        return;
      case ':exit':
        onClose();
        return;
      default:
        response = [`Command not found: ${command}`, 'Type ":help" for available commands'];
    }

    setOutput(prev => [...prev, `> ${command}`, ...response, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="bg-github-bg border-github-border w-full max-w-2xl max-h-96 overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b border-github-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-github-text/60 text-sm font-mono">hanish@terminal</span>
          <button 
            onClick={onClose}
            className="text-github-text/60 hover:text-github-text text-sm"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4 h-80 overflow-y-auto font-mono text-sm">
          <div className="space-y-1">
            {output.map((line, index) => (
              <div key={index} className={line.startsWith('>') ? 'text-github-green' : 'text-github-text'}>
                {line}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="flex items-center gap-2">
              <span className="text-github-purple">hanish@terminal:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-github-text outline-none"
                placeholder="Type a command..."
              />
              <span className="animate-pulse text-github-green">_</span>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default CommandInput;
