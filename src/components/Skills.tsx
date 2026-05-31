import { useState } from 'react';
import { Award } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Competencies' },
    { id: 'ops', name: 'Business Operations' },
    { id: 'data', name: 'Data & Analytics' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'comm', name: 'Strategic Comm.' }
  ];

  const skillsData = [
    { name: 'Daily Business Operations & Reporting', level: 95, category: 'ops', icon: '📈', info: 'Managing daily timelines, resource dispatching, and comprehensive progress reports.' },
    { name: 'Data Visualization (PowerPoint/Excel)', level: 98, category: 'data', icon: '📊', info: 'Certified in Microsoft data workflows to extract clean narratives.' },
    { name: 'Recruitment Analytics & ATS Optimization', level: 90, category: 'data', icon: '🎯', info: 'Enhancing job postings and filtering talent efficiently.' },
    { name: 'AI Sourcing & Prompt Workflow Setup', level: 92, category: 'ai', icon: '🤖', info: 'Integrating LLM workflows for rapid information compilation.' },
    { name: 'Client Engagement & Demonstrations', level: 88, category: 'comm', icon: '💡', info: 'Highlighting key benefits through active customer inquiry management.' },
    { name: 'Active Lead Generation & Follow-ups', level: 90, category: 'comm', icon: '⚡', info: 'Streamlined communication funnels for accelerated conversions.' },
    { name: 'Process Simplification & Documentation', level: 94, category: 'ops', icon: '📑', info: 'Replacing convoluted manuals with accessible micro-guides.' },
    { name: 'Logical Thinking & Sudoku Problem Solving', level: 100, category: 'ops', icon: '🧩', info: '1st Winner in Inter-Departmental Sudoku Games.' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900/60 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-2 py-0.5 rounded bg-purple-950/50 border border-purple-500/20 block w-max mb-3">
              02 / Core Competencies
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Aesthetic tools. <br />
              <span className="text-gradient">Measurable outcomes.</span>
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/40 border border-white/5 self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="glass-panel p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
            >
              {/* Subtle hover background fill */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-start justify-between gap-2 mb-2 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xl shrink-0 bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center border border-white/5">
                    {skill.icon}
                  </span>
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-300 transition-colors tracking-tight">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                      {skill.info}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-white px-2 py-1 bg-black/40 rounded border border-white/5 shrink-0 group-hover:border-cyan-400/40 transition-colors">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden mt-3 relative border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Glowing decorative pill on hover */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-r from-transparent to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
}
