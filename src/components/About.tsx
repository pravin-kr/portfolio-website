import { User, Target, Flame, Cpu, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/20">
            01 / Executive Summary
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-12">
          Redefining operational efficiency <br />
          <span className="text-gray-400 font-light text-2xl sm:text-4xl block mt-1">
            with a modern, AI-first toolkit.
          </span>
        </h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Rewrite block */}
          <div className="lg:col-span-7 space-y-6 glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span>AI-Driven Business Operations Specialist</span>
            </h3>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Traditional business administration is getting an upgrade. As a proactive BBA student based in Katihar, Bihar, I operate at the vital intersection of <strong className="text-white">sales operations, recruitment analytics, and high-leverage digital tools</strong>. 
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Instead of relying on legacy methods, I integrate <strong className="text-cyan-400">emerging AI tools</strong> directly into daily business rhythms—simplifying bloated workflows, supercharging candidate sourcing via ATS resume optimization, and extracting visual narratives out of complex datasets using advanced Excel and PowerPoint.
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-rose-400" />
                <span>Results-Obsessed</span>
              </span>
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Automation-Driven</span>
              </span>
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cross-Functional Adaptability</span>
              </span>
            </div>

            {/* Subtle Gen-Z touch quotes */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/5 to-transparent border-l-2 border-cyan-400">
              <p className="text-xs italic text-gray-300 font-mono">
                "I don't just manage daily tasks; I look for the bottlenecks and configure prompt-based workflows to solve them before they escalate."
              </p>
            </div>

          </div>

          {/* Personality & Vibe Check side cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10 hover:border-purple-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                
                <Flame className="w-4 h-4 text-purple-400 group-hover:scale-125 transition-transform" />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Communication Excellence</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Capable of delivering polished product demonstrations and sharp client follow-ups without the robotic corporatisms. Authentic, strategic, and persuasive.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-white/10 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
              
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-[10px] text-cyan-300 font-mono">Fast & Structured Execution</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Operational Efficiency</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Certified by Microsoft and Google in data visualization. I transform messy spreadsheets into stunning, board-ready PowerPoint decks that drive consensus immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-gray-900 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
              <h4 className="text-xs font-mono text-indigo-300 mb-2 uppercase tracking-widest">Core Directive</h4>
              <div className="text-2xl font-bold text-white font-mono tracking-tight">
                "Simplify. Automate. Execute."
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                Maximizing organizational efficiency by letting AI handle manual iterations while retaining human strategic oversight.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
