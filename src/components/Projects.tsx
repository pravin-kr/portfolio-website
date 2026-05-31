import { useState } from 'react';
import { ExternalLink, Sparkles, FileSpreadsheet, Eye, Presentation } from 'lucide-react';

export default function Projects() {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const projectsData = [
    {
      id: 'ats-engine',
      title: "ATS-Scoring Optimization Engine",
      category: "AI Workflow Integration",
      description: "A customized prompt architecture and formatting protocol designed to automatically improve ATS visibility and boost candidate view rate metrics.",
      techStack: ["ChatGPT Prompts", "ATS Algorithms", "Keyword Matrices", "Recruitment Analytics"],
      glowColor: "glow-border-cyan",
      badge: "Completed Projects",
      metrics: "+100% Sourcing Efficiency",
      simulatedDemo: "Simulated ATS Scanner: Scans document node trees and outputs matching keyword weights instantly. Currently tuned to standard enterprise parser definitions."
    },
    {
      id: 'dealership-analytics',
      title: "Automated Dealership Analytics Suite",
      category: "Operational Intelligence",
      description: "Structured spreadsheet models and tracking templates engineered to compile daily follow-ups, inquiry stats, and sales efficiency logs into visual reports.",
      techStack: ["Microsoft Excel", "Advanced Pivot Charts", "Data Visualizer", "Operational KPIs"],
      glowColor: "glow-border-purple",
      badge: "Business Analytics",
      metrics: "Daily Logs Streamlined",
      simulatedDemo: "Simulates daily inquiry aggregations, highlighting pending client follow-ups with customized color-coded escalation alerts."
    },
    {
      id: 'boardroom-deck',
      title: "Boardroom-Ready Executive Decks",
      category: "Data Visualization",
      description: "Based on specialized training from Microsoft and Coursera Project Network. Fuses minimalist spacing, dark mode contrast, and clean layout patterns to tell corporate stories.",
      techStack: ["Microsoft PowerPoint", "Typography Hierarchies", "Contrast Grids", "Visual Hierarchy"],
      glowColor: "glow-border-cyan",
      badge: "Microsoft Certified",
      metrics: "High Consensus Layouts",
      simulatedDemo: "Features slide master blueprints with automated grid padding rules, eliminating text overlap and optimizing visual delivery times."
    },
    {
      id: 'project-initiation',
      title: "Project Initiation Roadmap Framework",
      category: "Project Management",
      description: "A robust starter blueprint inspired by Google's Foundations of Project Management. Details exact setup instructions, success criteria definitions, and stakeholder charts.",
      techStack: ["Google PM Protocols", "Stakeholder Charts", "Scope Management", "Risk Matrices"],
      glowColor: "glow-border-purple",
      badge: "Google Credentialed",
      metrics: "Zero Scope Creep Setup",
      simulatedDemo: "Includes editable scope charter definitions and risk assessment matrices ready for active execution."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 block w-max mb-3">
            04 / Operational Output
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured projects <br />
            <span className="text-gradient">& interactive frameworks.</span>
          </h2>
          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {projectsData.map((proj) => {
            const isPreviewing = activePreview === proj.id;

            return (
              <div 
                key={proj.id} 
                className={`glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 flex flex-col justify-between relative overflow-hidden ${
                  isPreviewing ? 'ring-2 ring-cyan-400 bg-gray-900/90' : ''
                }`}
              >
                {/* Top background accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600" />

                <div>
                  
                  {/* Categorization & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-cyan-400 tracking-wider font-semibold uppercase">
                      {proj.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 tracking-tight flex items-center gap-2">
                    {proj.id.includes('deck') ? <Presentation className="w-5 h-5 text-purple-400 shrink-0" /> : <FileSpreadsheet className="w-5 h-5 text-cyan-400 shrink-0" />}
                    <span>{proj.title}</span>
                  </h3>

                  {/* Highlight Metric Badge */}
                  <div className="inline-block px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs text-emerald-300 font-mono font-bold mb-4">
                    ✦ {proj.metrics}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2 py-1 bg-black/40 text-gray-300 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Actions & Simulated Interactive Area */}
                <div>
                  
                  {/* Expand preview box */}
                  {isPreviewing && (
                    <div className="mb-4 p-4 rounded-xl bg-black/80 border border-cyan-400/40 animate-fade-in text-xs font-mono text-gray-300 space-y-2">
                      <div className="flex items-center justify-between text-cyan-300 border-b border-white/10 pb-1">
                        <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Live Output Simulation
                        </span>
                        <span className="text-[10px] bg-cyan-950 px-1 py-0.5 rounded text-cyan-400">ACTIVE</span>
                      </div>
                      <p className="leading-relaxed text-gray-200">
                        {proj.simulatedDemo}
                      </p>
                      <div className="text-[10px] text-emerald-400 pt-1">
                        ✓ Operational rules configured. Zero dependencies required.
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    
                

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        

      </div>
    </section>
  );
}
