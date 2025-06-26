
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Text-to-Video AI",
      description: "An end-to-end AI project that generates videos from text prompts using GPT for scripting, Edge TTS for voice, and MoviePy for rendering.",
      tech: ["Streamlit", "Python", "OpenAI", "MoviePy"],
      github: "https://github.com/Hanshu110/Text-to-Video-AI",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      title: "Image & Video Colorization",
      description: "A deep learning project that restores color to grayscale images and videos using OpenCV and pre-trained CNN models.",
      tech: ["OpenCV", "Python", "Deep Learning"],
      github: "https://github.com/Hanshu110/Image_and_Video-Colorization-using-Deep-Learning",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      title: "Task Portal",
      description: "A full-stack task management web application with user authentication, task tracking, and MongoDB Atlas backend integration.",
      tech: ["GraphQL", "MongoDB", "Node.js", "Ansible"],
      github: "https://github.com/Hanshu110/Task-Portal",
      icon: "🗓️",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop"
    },
    {
      title: "Spider-Man Action Game",
      description: "A fun side-scroller action game themed on Spider-Man using Pygame. Swing, jump, and fight your way through enemies.",
      tech: ["Python", "Pygame"],
      github: "https://github.com/Hanshu110/Spider-Man-Action",
      icon: "🕷️",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop"
    },
    {
      title: "ScanMate",
      description: "An intelligent document scanner and OCR-based utility tool that extracts text from images and PDFs.",
      tech: ["Python", "Tesseract OCR", "Streamlit"],
      github: "https://github.com/Hanshu110/scanmate",
      icon: "🧾",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop"
    },
    {
      title: "Pacman Game Clone",
      description: "A classic Pacman arcade game clone built using Python and Pygame with game loop mechanics and collectible logic.",
      tech: ["Python", "Pygame"],
      github: "https://github.com/Hanshu110/Pacman",
      icon: "👻",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-github-accent">
          &lt;repositories&gt;
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-github-secondary border-github-border hover:bg-github-tertiary transition-all duration-300 overflow-hidden group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-github-bg/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-6xl">{project.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-github-text font-mono">
                    {project.title}
                  </h3>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-github-bg border border-github-border rounded hover:bg-github-tertiary transition-colors"
                  >
                    <Github className="w-4 h-4 text-github-text" />
                  </a>
                </div>
                
                <p className="text-github-text/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-github-accent/20 text-github-accent border-github-accent/30 text-xs font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
