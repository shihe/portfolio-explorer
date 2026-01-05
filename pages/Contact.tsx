
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="px-8 md:px-16 max-w-4xl py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
        Let's <span className="text-blue-500">connect</span>.
      </h2>
      
      <p className="text-xl text-gray-400 mb-12 max-w-2xl">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Social Presence</h3>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/shihe" className="flex items-center gap-4 text-white hover:text-blue-500 transition-colors group">
                <span className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <i className="fa-brands fa-github text-xl"></i>
                </span>
                <span className="text-lg font-medium">GitHub / shihe</span>
              </a>
              <a href="https://www.linkedin.com/in/eshih727/" className="flex items-center gap-4 text-white hover:text-blue-500 transition-colors group">
                <span className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </span>
                <span className="text-lg font-medium">LinkedIn / eshih727</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Location</h3>
            <p className="text-lg text-white font-medium">Irvine, CA</p>
          </div>
        </div>

        <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-3xl space-y-6">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">Quick Message</h3>
          <p className="text-gray-400 text-sm">
            Feel free to reach out via LinkedIn for the fastest response!
          </p>
          <div className="pt-4">
            <a 
              href="https://www.linkedin.com/in/eshih727/" 
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
