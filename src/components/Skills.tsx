
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "C", level: 60, icon: "⚙️" },
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", level: 90, icon: "🌐" },
        { name: "CSS", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 55, icon: "⚡" },
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL", level: 80, icon: "🗄️" },
        { name: "GitHub", level: 90, icon: "🔧" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Streamlit", level: 85, icon: "📊" },
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        { name: "OpenCV", level: 80, icon: "👁️" },
        { name: "NumPy", level: 85, icon: "🔢" },
        { name: "Pandas", level: 85, icon: "🐼" },
      ]
    },
    {
      category: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 90, icon: "🏗️" },
        { name: "OOP", level: 85, icon: "🔄" },
        { name: "REST APIs", level: 80, icon: "🌐" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-github-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-github-accent">
          &lt;skill_dashboard&gt;
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.category} className="bg-github-secondary border-github-border p-6 animate-fade-in hover:bg-github-tertiary transition-all duration-300" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-xl font-semibold mb-4 text-github-purple font-mono">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-github-text">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-mono text-sm">{skill.name}</span>
                      </span>
                      <span className="text-github-green font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-github-bg rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-github-accent to-github-green rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
