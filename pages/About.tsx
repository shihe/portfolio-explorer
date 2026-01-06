
import React from 'react';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Sleeper API', 'Data Visualization', 'UI/UX Design', 'JavaScript', 'HTML/CSS'
  ];

  return (
    <div className="px-8 md:px-16 max-w-4xl py-12 animate-page">
      <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
        Crafting <span className="text-blue-500">solutions</span> with code.
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-300 leading-relaxed">
        <div className="space-y-6">
          <p>
            Hi, I'm <span className="text-white font-semibold">Eric Shih</span>. I'm a software engineer passionate about building clean, performant, and user-centric web applications.
          </p>
          <p>
            My work primarily revolves around the intersection of data and design. I love taking complex information—like fantasy football stats or culinary data—and turning it into interactive, intuitive visualizations.
          </p>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-heading font-bold text-white">Technical Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-blue-400 font-medium hover:border-blue-500/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 p-8 border border-gray-800 rounded-3xl bg-gradient-to-br from-gray-900/50 to-transparent">
        <h3 className="text-xl font-heading font-bold text-white mb-4">The Philosophy</h3>
        <p className="text-gray-400 italic">
          "Software is not just about functionality; it's about how it makes a user feel and how effectively it communicates information."
        </p>
      </div>
    </div>
  );
};

export default About;
