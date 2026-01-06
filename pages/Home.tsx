
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PROJECTS } from '../constants.tsx';
import ProjectCard from '../components/ProjectCard.tsx';

const Home: React.FC = () => {
  const loopedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const originalLength = PROJECTS.length;
  const [internalIndex, setInternalIndex] = useState(originalLength);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeProjectIndex = internalIndex % originalLength;

  const scrollToCard = useCallback((index: number, smooth: boolean = true) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.children;
    if (!cards[index]) return;
    const targetCard = cards[index] as HTMLElement;
    const scrollLeft = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
    container.scrollTo({
      left: scrollLeft,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, []);

  const handleScrollEnd = useCallback(() => {
    if (isTransitioning) return;
    if (internalIndex < originalLength) {
      const newIndex = internalIndex + originalLength;
      setInternalIndex(newIndex);
      scrollToCard(newIndex, false);
    } else if (internalIndex >= originalLength * 2) {
      const newIndex = internalIndex - originalLength;
      setInternalIndex(newIndex);
      scrollToCard(newIndex, false);
    }
  }, [internalIndex, originalLength, scrollToCard, isTransitioning]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(internalIndex);
    }, 100);
    return () => clearTimeout(timer);
  }, [internalIndex, scrollToCard]);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setInternalIndex(prev => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setInternalIndex(prev => prev - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let timeout: any;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScrollEnd, 150);
    };
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [handleScrollEnd]);

  return (
    <div className="animate-page">
      <div className="px-8 md:px-16 mb-8 max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-4">
          Building digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">experiences</span> that matter.
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl">
          A curated selection of software engineering projects focusing on data visualization, fantasy sports analytics, and intuitive user experiences.
        </p>
      </div>

      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto py-12 scrollbar-hide no-scrollbar items-center snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loopedProjects.map((project, index) => (
            <div key={`${project.id}-${index}`} className="snap-center">
              <ProjectCard 
                project={project} 
                isActive={index === internalIndex}
                onClick={() => {
                  if (index !== internalIndex) {
                    setInternalIndex(index);
                  }
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-12 pointer-events-none">
          <button 
            onClick={prevProject}
            className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:scale-110 pointer-events-auto shadow-2xl"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pr-12 pointer-events-none">
          <button 
            onClick={nextProject}
            className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:scale-110 pointer-events-auto shadow-2xl"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="mt-8 px-8 md:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="h-[2px] w-48 bg-gray-800 relative rounded-full overflow-hidden">
             <div 
              className="absolute inset-y-0 left-0 bg-blue-500 transition-all duration-500"
              style={{ width: `${((activeProjectIndex + 1) / originalLength) * 100}%` }}
             ></div>
          </div>
          <span className="text-sm font-mono text-gray-500">
             {String(activeProjectIndex + 1).padStart(2, '0')} / {String(originalLength).padStart(2, '0')}
          </span>
        </div>

        <div className="flex gap-4">
           {PROJECTS[activeProjectIndex].tags.map(tag => (
             <div key={tag} className="px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-[10px] uppercase tracking-wider text-gray-400 font-bold">
               {tag}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
