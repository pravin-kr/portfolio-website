import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import DevGuide from './components/DevGuide';
import Contact from './components/Contact';
import { Terminal } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Premium fast loading simulation to impress recruiters within 5 seconds
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 25;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Back to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center p-4 z-50 animate-pulse-glow">
        <div className="max-w-md w-full glass-panel p-8 rounded-2xl border border-cyan-500/30 text-center space-y-6">
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center mx-auto text-white font-mono font-bold text-xl shadow-lg shadow-cyan-500/20 animate-bounce">
            PK
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold text-white tracking-tight">
              Pravin Kumar
            </h1>
            <p className="text-xs text-cyan-400 font-mono">
              PREMIUM PORTFOLIO ENGINE v2.0
            </p>
          </div>

          {/* Loading bar */}
          <div className="w-full bg-black/80 h-1.5 rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-150 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>BOOTING GENERATIVE ASSETS</span>
            <span className="text-cyan-400 font-bold">{loadingProgress}%</span>
          </div>

          <p className="text-[10px] text-gray-400 italic">
            "Optimized for 5-second recruiter assessment..."
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-[#f3f4f6] selection:bg-cyan-500 selection:text-black relative">
      
      {/* Global animated ambient layers */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none z-0 animate-float" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none z-0 animate-float" style={{ animationDelay: '3s' }} />

      {/* Primary Application Layout */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certificates />
          <DevGuide />
          <Contact />
        </main>

        {/* Persistent floating actions bar */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
          

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-gray-950 font-bold flex items-center justify-center hover:bg-cyan-400 transition-colors shadow-xl text-xs"
            title="Scroll to top"
          >
            ↑
          </button>

        </div>

      </div>

    </div>
  );
}
