import { GraduationCap, Award, Building2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 block w-max mx-auto sm:mx-0 mb-3">
            05 / Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Academic pathway. <br />
            <span className="text-gray-500 text-xl sm:text-3xl block mt-1 font-light">
              Built on rigorous administration & analytics.
            </span>
          </h2>
        </div>

        {/* Education grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BBA Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono font-bold uppercase tracking-wider">
                  Degree Program
                </span>
                <span className="text-xs font-mono text-gray-400 font-semibold bg-black/40 px-2 py-1 rounded border border-white/5">
                  2024 – 2027
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-400 shrink-0" />
                <span>Bachelor of Business Administration (BBA)</span>
              </h3>

              <p className="text-sm font-mono text-gray-300 mb-6 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span>Arcade Business College, Patna</span>
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Specialized focus on corporate organizational behavior, quantitative operational methods, marketing strategy, and data structures. Actively bridging classroom frameworks with real-world AI integrations.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Status: In Progress</span>
              </span>
              <span className="text-gray-500">Patliputra University Affiliated</span>
            </div>
          </div>

          {/* Intermediate Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono font-bold uppercase tracking-wider">
                  Higher Secondary
                </span>
                <span className="text-xs font-mono text-gray-400 font-semibold bg-black/40 px-2 py-1 rounded border border-white/5">
                  2022 – 2024
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400 shrink-0" />
                <span>Intermediate Higher Education</span>
              </h3>

              <p className="text-sm font-mono text-gray-300 mb-6 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span>R.K.K. College</span>
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Acquired essential core competencies in mathematical foundations, critical reasoning, and business studies. Formulated early passion for complex data parsing and documentation workflows.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="text-gray-400 font-semibold">✓ Successfully Completed</span>
              <span className="text-gray-500">Katihar, Bihar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
