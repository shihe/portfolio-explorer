
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, onClick }) => {
  const handleViewButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card onClick from firing twice if button is inside
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={onClick}
      className={`
        relative flex-shrink-0 w-[280px] md:w-[400px] h-[450px] md:h-[550px] 
        transition-all duration-500 cursor-pointer overflow-hidden rounded-2xl group
        border ${isActive ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-gray-800 scale-90 opacity-60 hover:opacity-100'}
      `}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent"></div>
      
      {/* External Link Hint for Inactive Cards */}
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full">
            <i className="fa-solid fa-eye text-white text-2xl"></i>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 p-6 md:p-8 w-full">
        <div className="flex justify-between items-center mb-2">
           <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{project.year}</span>
           <div className="flex gap-2">
             {project.tags.slice(0, 2).map(tag => (
               <span key={tag} className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-white/80">{tag}</span>
             ))}
           </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-sm md:text-base text-gray-300 line-clamp-3 mb-6">
          {project.description}
        </p>
        
        {isActive && (
          <button 
            onClick={handleViewButtonClick}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all group/btn"
          >
            View Project
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
