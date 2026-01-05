
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 p-8 md:px-16 md:py-12 flex justify-between items-center">
        <Link to="/" className="group">
          <h1 className="text-3xl font-heading font-bold tracking-tighter text-white">
            ERIC SHIH<span className="text-blue-500">.</span>
          </h1>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.3em] mt-1 group-hover:text-blue-400 transition-colors">Portfolio</p>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link 
            to="/" 
            className={`transition-colors hover:text-blue-400 ${location.pathname === '/' ? 'text-white border-b border-blue-500 pb-1' : ''}`}
          >
            Works
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors hover:text-blue-400 ${location.pathname === '/about' ? 'text-white border-b border-blue-500 pb-1' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors hover:text-blue-400 ${location.pathname === '/contact' ? 'text-white border-b border-blue-500 pb-1' : ''}`}
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-2xl text-white">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center relative z-10 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="p-8 md:px-16 text-center md:text-left relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 Portfolio. Designed for the inquiring.</p>
          <div className="flex gap-6 text-xl text-gray-400">
            <a href="https://github.com/shihe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/eshih727/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
