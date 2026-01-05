
import React from 'react';

const About: React.FC = () => {
  const skills = [
    'Java', 'Kotlin', 'Python', 'Scala', 'TypeScript', 'AWS', 'React', 'Node.js', 'Perl', 'Data Visualization', 'JavaScript', 'HTML/CSS', 'SQL'
  ];

  return (
    <div className="px-8 md:px-16 max-w-4xl py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
        Crafting <span className="text-blue-500">solutions</span> with code.
      </h2>
      
      <div className="grid md:grid-config-2 gap-12 text-lg text-gray-300 leading-relaxed">
        <div className="space-y-6">
          <p>
            Hi, I'm <span className="text-white font-semibold">Eric Shih</span>. I'm a software engineer passionate about building clean, performant, and impactful user applications.
          </p>
          <p>
            My works focus on the intersection of data and design. I love taking complex information and turning it into interactive, intuitive visualizations.
          </p>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-heading font-bold text-white">Technical Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-blue-400 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
