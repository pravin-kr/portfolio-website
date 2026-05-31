import { useState } from 'react';
import { Download, Sparkles, Zap, ArrowRight, FileText, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownloadTrigger = () => {
    setDownloadNotice(true);
    setTimeout(() => {
      setDownloadNotice(false);
    }, 6000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-glow">
      {/* Background Decorative grids & floaters */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Glowing atmospheric nodes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/90 border border-white/10 mb-6 group hover:border-cyan-500/40 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-gray-300 font-mono tracking-tight">
            Based in Katihar, Bihar • <span className="text-white font-semibold">Available Worldwide</span>
          </span>
          <Sparkles className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Main Headline area */}
        <div className="grid xl:grid-cols-[1.4fr_0.9fr] gap-10 items-start">
          <div className="w-full">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Simplifying processes. <br />
            <span className="text-gradient">Driving data intelligence</span> <br />
            <span className="text-gradient-cyan text-3xl sm:text-5xl md:text-6xl block mt-2">
              & operational excellence.
            </span>
          </h1>

          {/* Short intro with subtle motion vibe */}
          <p className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-8 border-l-2 border-cyan-500 pl-4 py-1 bg-gradient-to-r from-cyan-500/5 to-transparent">
            I'm <strong className="text-white font-semibold">Pravin Kumar</strong>, a proactive Business Administration student specialized in sales operations, recruitment analytics, and AI workflow integration. Focused on business operations, analytics, and AI-assisted workflow optimization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-white text-gray-950 font-bold text-center hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5"
            >
              <span>View Projects</span>
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            </a>

            <div className="relative inline-block">
              {/* Actual File Download Link pointing to our verified text file */}
              <a 
                href="/Resume.pdf"
                                
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900/90 border border-white/20 text-white font-semibold text-center hover:bg-gray-800 hover:border-cyan-500 transition-all flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              
            </div>

            <a 
              href="#certificates"
              className="px-4 py-4 sm:py-2 text-xs font-mono text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Explore 9+ Credentials</span>
              <ArrowRight className="w-3 h-3" />
            </a>

          </div>

          {/* Core competency statistics / quick pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <span className="block text-2xl font-bold text-white font-mono">100%</span>
              <span className="text-xs text-gray-400">AI Tool Integration</span>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <span className="block text-2xl font-bold text-cyan-400 font-mono">ATS</span>
              <span className="text-xs text-gray-400">Visibility Optimized</span>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <span className="block text-2xl font-bold text-purple-400 font-mono">Excel+PPT</span>
              <span className="text-xs text-gray-400">Data Visualization</span>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <span className="block text-2xl font-bold text-emerald-400 font-mono">BBA</span>
              <span className="text-xs text-gray-400">Arcade Business College '27</span>
            </div>

          </div>

        </div>

      

{/* Right Side Profile Image */}
<div className="flex justify-center items-center relative mt-10 xl:mt-0">
  <div className="relative">

    {/* Glow Effect */}
    <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

    <img
      src="/images/8.jpeg"
      alt="Pravin Kumar"
      className="relative w-[220px] sm:w-[280px] xl:w-[420px] h-auto object-cover rounded-3xl border border-white/10 shadow-2xl"
    />

  </div>
</div>

</div>
      </div>
      {/* Decorative premium ticker/banner at the bottom of hero */}
      <div className="mt-16 w-full py-2.5 bg-gradient-to-r from-indigo-950 via-gray-900 to-cyan-950 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-mono text-gray-400 tracking-wider overflow-x-auto whitespace-nowrap gap-8 py-0.5 scrollbar-none">
          <span className="flex items-center gap-1.5"><span className="text-cyan-400">✦</span> BAJAJ FINSERV TRAINEE</span>
          <span className="flex items-center gap-1.5"><span className="text-purple-400">✦</span> AMANAH JOBS HR INTERN</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400">✦</span> SUDOKU 1ST WINNER</span>
          <span className="flex items-center gap-1.5"><span className="text-amber-400">✦</span> GOOGLE CERTIFIED PM</span>
          <span className="flex items-center gap-1.5"><span className="text-rose-400">✦</span> MICROSOFT DATA VISUALIZER</span>
        </div>
      </div>
    </section>
  );
}
