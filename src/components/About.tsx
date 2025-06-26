
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-github-accent">
          &lt;about_me&gt;
        </h2>
        
        <div className="bg-github-secondary border border-github-border rounded-lg p-8 animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-github-text/60 text-sm font-mono">about_hanish.txt</span>
          </div>
          
          <div className="font-mono text-github-text space-y-4">
            <p className="text-github-green">
              <span className="text-github-purple">const</span> developer = {'{'}
            </p>
            <div className="pl-4 space-y-2">
              <p><span className="text-github-accent">name:</span> <span className="text-github-orange">"Hanish B"</span>,</p>
              <p><span className="text-github-accent">role:</span> <span className="text-github-orange">"Computer Science Engineering Student"</span>,</p>
              <p><span className="text-github-accent">college:</span> <span className="text-github-orange">"Bannari Amman Institute of Technology"</span>,</p>
              <p><span className="text-github-accent">year:</span> <span className="text-github-orange">"Final Year"</span>,</p>
              <p><span className="text-github-accent">passion:</span> [<span className="text-github-orange">"Machine Learning"</span>, <span className="text-github-orange">"Software Development"</span>],</p>
              <p><span className="text-github-accent">philosophy:</span> <span className="text-github-orange">"Building projects that solve real-world problems"</span>,</p>
              <p><span className="text-github-accent">strengths:</span> [<span className="text-github-orange">"Data Structures"</span>, <span className="text-github-orange">"Problem Solving"</span>, <span className="text-github-orange">"Clean Code"</span>],</p>
              <p><span className="text-github-accent">traits:</span> [<span className="text-github-orange">"Quick Learner"</span>, <span className="text-github-orange">"Effective Communicator"</span>]</p>
            </div>
            <p className="text-github-green">{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
