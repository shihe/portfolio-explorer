
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from './constants';
import ProjectCard from './components/ProjectCard';
import AISidebar from './components/AISidebar';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 280 : 400;
      const gap = 32; // gap-8
      const scrollPosition = activeIndex * (cardWidth + gap);
      
      // Center the active card
      const centerOffset = (carouselRef.current.clientWidth - cardWidth) / 2;
      
      carouselRef.current.scrollTo({
        left: scrollPosition - centerOffset,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 p-8 md:px-16 md:py-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold tracking-tighter text-white">
            LUMINA<span className="text-blue-500">.</span>
          </h1>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.3em] mt-1">Portfolio v2.0</p>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Works</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Labs</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden text-2xl text-white">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </header>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col justify-center relative z-10 py-12">
        <div className="px-8 md:px-16 mb-12 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">experiences</span> that matter.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A curated selection of software engineering projects focusing on visualization, 
            artificial intelligence, and high-performance system architecture.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative group">
          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-hidden py-8 px-[50vw] items-center"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-8">
            <button 
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-8">
            <button 
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 px-8 md:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="h-[2px] w-48 bg-gray-800 relative rounded-full overflow-hidden">
               <div 
                className="absolute inset-y-0 left-0 bg-blue-500 transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / PROJECTS.length) * 100}%` }}
               ></div>
            </div>
            <span className="text-sm font-mono text-gray-500">
               {String(activeIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex gap-4">
             {PROJECTS[activeIndex].tags.map(tag => (
               <div key={tag} className="px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                 {tag}
               </div>
             ))}
          </div>
        </div>
      </main>

      {/* Footer / Contact Hint */}
      <footer className="p-8 md:px-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 Lumina Portfolio. Designed for the future.</p>
          <div className="flex gap-6 text-xl text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-dribbble"></i></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </footer>

      {/* AI Sidebar Component */}
      <AISidebar />
    </div>
  );
};

export default App;
