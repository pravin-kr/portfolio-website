import { useState, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeBrand, setActiveBrand] = useState(0);

  const brandThemes = [
    "⚡ Gen-Z AI Operator",
    "🚀 Data-Driven Strategist",
    "💎 Workflow Architect"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setActiveBrand((prev) => (prev + 1) % brandThemes.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Logo / Name */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold tracking-tighter group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/20">
            PK
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight block text-white group-hover:text-cyan-400 transition-colors">
              Pravin Kumar
            </span>
            <span className="text-xs text-gray-400 block -mt-1 font-mono tracking-wider">
              BBA • Analytics
            </span>
          </div>
        </a>

        {/* Right Nav Links & Actions */}
        <nav className="flex items-center gap-1 sm:gap-6">
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>Certificates</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-purple-500/20 text-purple-300 rounded font-mono">9+</span>
            </a>
          </div>

         

            <a 
              href="#contact"
              className="relative group px-4 py-1.5 rounded-lg font-medium text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              <span className="relative z-10 flex items-center gap-1">
                <span>Let's Talk</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
        </nav>
        
      </div>
    </header>
  );
}
