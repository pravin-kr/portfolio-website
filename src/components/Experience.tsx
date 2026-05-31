import { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const expData = [
    {
      company: "Bajaj Finserv",
      role: "Sales Trainee",
      location: "Patna, Bihar",
      period: "September 2025 – November 2025",
      badge: "Dealership Dynamics",
      accentColor: "from-blue-500 to-cyan-500",
      description: "Operated at the frontline of real-world business operations, blending structured reporting with proactive client relationship management.",
      achievements: [
        { label: "Client Management", text: "Orchestrated highly interactive product demonstrations, translating complex financial terms into clear value propositions for active clients." },
        { label: "Operational Support", text: "Maintained robust daily data logs, structured team reporting funnels, and maintained active follow-up pipelines to eliminate lost leads." },
        { label: "Dealership Intelligence", text: "Acquired critical firsthand insights into multi-tiered dealership operations, operational bottlenecks, and corporate sales strategies." }
      ],
      metrics: ["Daily Reporting Automation", "Active Follow-ups", "Client Demonstrations"]
    },
    {
      company: "Amanah Jobs",
      role: "Human Resources Intern",
      location: "Patna, Bihar",
      period: "October 2025 – November 2025",
      badge: "AI Talent Pipeline",
      accentColor: "from-purple-500 to-indigo-500",
      description: "Modernized candidate sourcing workflows by deploying targeted AI prompt assistance and optimizing recruitment metrics.",
      achievements: [
        { label: "AI Integration", text: "Configured intelligent filtering criteria using advanced tools to accelerate candidate matching and cut down manual screening latency." },
        { label: "ATS Optimization", text: "Designed algorithm-friendly resume architectures and high-visibility job descriptions to guarantee optimal scoring metrics." },
        { label: "Recruitment Analytics", text: "Conducted preliminary quantitative reviews of sourcing funnels to evaluate campaign return on investment and talent quality." }
      ],
      metrics: ["AI Sourcing Assist", "ATS Scoring Maximization", "Candidate Visibility"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 block w-max mb-3">
            03 / Career Pathway
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Real-world execution. <br />
            <span className="text-gray-500 text-xl sm:text-3xl block mt-1">
              Tested under high-volume pressure.
            </span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
          
          {expData.map((item, idx) => {
            const isExpanded = expanded === idx;

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline node/marker */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gray-950 border-2 ${
                  isExpanded ? 'border-cyan-400 bg-cyan-500/20' : 'border-gray-600 group-hover:border-white'
                } transition-colors flex items-center justify-center`} />

                {/* Main Experience Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.company}
                        </h3>
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-gradient-to-r ${item.accentColor} text-white font-semibold`}>
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-cyan-400 font-medium text-sm mt-0.5 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{item.role}</span>
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-gray-400 font-mono gap-1 mt-1 sm:mt-0">
                      <span className="flex items-center gap-1 text-gray-300">
                        <Calendar className="w-3 h-3 text-cyan-500" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-purple-500" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Intro Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Core Metrics tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>

                  {/* Toggle detailed operations block */}
                  <div className="border-t border-white/5 pt-4">
                    <button
                      onClick={() => setExpanded(isExpanded ? null : idx)}
                      className="w-full flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-white transition-colors py-1 group/btn"
                    >
                      <span className="flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3 h-3" />
                        <span>{isExpanded ? "Hide Operational Actions" : "Reveal Operational Actions"}</span>
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />}
                    </button>

                    {/* Operational bullet points */}
                    {isExpanded && (
                      <div className="mt-4 space-y-3 pt-2 animate-fade-in">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white font-semibold">{ach.label}: </strong>
                              <span>{ach.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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
