import { useState } from 'react';
import { Award, Image as ImageIcon, Eye, HelpCircle, Flame } from 'lucide-react';

export default function Certificates() {
  const [activeMobileReveal, setActiveMobileReveal] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const certData = [
    {
      title: "Financial Management Skill",
      issuer: "MSDE Skill India",
      date: "Issued May 2026",
      credentialId: "Verified Certificate",
      skills: "Financial Operations, Core Budgeting",
      placeholderImg: "bg-gradient-to-tr from-cyan-950 via-teal-900 to-black",
      badgeColor: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
      suggestedFilename: "/images/1.jpg"
    },
    {
      title: "Inter-Departmental Indoor Games (1st Winner in Sudoku)",
      issuer: "Arcade Business College, Patna",
      date: "Issued Sep 2025",
      credentialId: "1st Place Winner",
      skills: "Logical thinking, Problem Solving, +4 skills",
      placeholderImg: "bg-gradient-to-tr from-amber-950 via-purple-900 to-black",
      badgeColor: "text-amber-300 border-amber-500/30 bg-amber-500/10",
      suggestedFilename: "/images/2.jpg"
    },
    {
      title: "Project Initiation: Starting a Successful Project",
      issuer: "Google",
      date: "Issued Aug 2025",
      credentialId: "Credential ID DVQVZBFSRSCW",
      skills: "Project Initiation, Success Criteria",
      placeholderImg: "bg-gradient-to-tr from-blue-950 via-indigo-900 to-black",
      badgeColor: "text-blue-300 border-blue-500/30 bg-blue-500/10",
      suggestedFilename: "/images/3.jpeg"
    },
    {
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "Issued Jun 2025",
      credentialId: "Credential ID VFZBCSKTDYXN",
      skills: "Project Management, Project Planning, +2 skills",
      placeholderImg: "bg-gradient-to-tr from-indigo-950 via-purple-900 to-black",
      badgeColor: "text-indigo-300 border-indigo-500/30 bg-indigo-500/10",
      suggestedFilename: "/images/4.jpeg"
    },
    {
      title: "Internship Common Aptitude Test",
      issuer: "Internship Studio",
      date: "Issued Jun 2025",
      credentialId: "Credential ID CIT-P-1879951",
      skills: "Quantitative Aptitude, Logical Logic",
      placeholderImg: "bg-gradient-to-tr from-rose-950 via-purple-900 to-black",
      badgeColor: "text-rose-300 border-rose-500/30 bg-rose-500/10",
      suggestedFilename: "/images/5.jpg"
    },
    {
      title: "Work Smarter with Microsoft PowerPoint",
      issuer: "Microsoft",
      date: "Issued Apr 2025",
      credentialId: "Credential ID KSPO7XLM6G1I",
      skills: "Microsoft PowerPoint, Advanced Formatting",
      placeholderImg: "bg-gradient-to-tr from-cyan-950 via-blue-900 to-black",
      badgeColor: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
      suggestedFilename: "/images/6.jpeg"
    },
    {
      title: "How To Visualize Your Data Using Microsoft Powerpoint",
      issuer: "Coursera Project Network",
      date: "Issued Mar 2025",
      credentialId: "Credential ID UZ254P0EV54L",
      skills: "Data Visualization, Corporate Delivery",
      placeholderImg: "bg-gradient-to-tr from-purple-950 via-indigo-900 to-black",
      badgeColor: "text-purple-300 border-purple-500/30 bg-purple-500/10",
      suggestedFilename: "/images/7.jpeg"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900/80 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 block w-max mb-3">
              06 / Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Achievements & <br />
              <span className="text-gradient">Certificate Showcase.</span>
            </h2>
          </div>

          
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {certData.map((cert, idx) => {
            const isManuallyRevealed = activeMobileReveal === idx;

            return (
              <div 
                key={idx}
                className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between group relative h-[310px] sm:h-[340px]"
              >
              
                {/* 1. INITIAL BASE LAYER: Always visible underneath, showing title and issuing organization clearly */}
                <div className="p-6 flex flex-col justify-between h-full relative z-10 transition-all duration-500 group-hover:opacity-10">
                  
                  <div>
                    {/* Issuing Organization */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border ${cert.badgeColor}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">
                        {cert.date}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-3">
                      {cert.title}
                    </h3>

                    {/* Credential ID */}
                    <p className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-500/20 inline-block mb-3">
                      {cert.credentialId}
                    </p>

                    {/* Skills Tagline */}
                    <p className="text-xs text-gray-400 font-mono leading-relaxed line-clamp-2">
                      <strong className="text-gray-300">Skills:</strong> {cert.skills}
                    </p>
                  </div>

                  {/* Call-to-action micro prompt */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1 text-cyan-400 animate-pulse">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to preview certificate</span>
                    </span>
                    <button 
                      onClick={() => setActiveMobileReveal(isManuallyRevealed ? null : idx)}
                      className="text-[10px] bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-colors text-white block sm:hidden"
                    >
                      {isManuallyRevealed ? "Hide" : "Tap Reveal"}
                    </button>
                  </div>

                </div>

                {/* 2. PREMIUM HOVER REVEAL LAYER: The certificate image preview overlay with smooth blur, glow, scale & glassmorphism overlay! */}
                <div className={`absolute inset-0 z-20 ${cert.placeholderImg} p-6 flex flex-col justify-between transition-all duration-500 transform ${
                  isManuallyRevealed 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-4 opacity-0 scale-95 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'
                }`}>
                  
                  {/* Backdrop blur & glow accents */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0 pointer-events-none" />
                  <div className="absolute inset-0 glow-border-cyan opacity-50 z-0 pointer-events-none" />

                  {/* Inner preview content layer */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    
                    {/* Top Simulated Certificate Preview Graphic header */}
                    <div className="flex items-start justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-cyan-300 uppercase block bg-black/60 px-1.5 py-0.5 rounded w-max mb-1">
                          PREVIEW PLACEHOLDER
                        </span>
                        <h4 className="font-mono text-xs font-bold text-white line-clamp-1">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] text-gray-300 block">
                          Verified by {cert.issuer}
                        </span>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg animate-pulse">
                        <Award className="w-4 h-4 text-amber-400" />
                      </div>
                    </div>

                    {/* Visual core preview box representing the scanned certificate */}
                    <div className="my-2 rounded-lg overflow-hidden border border-white/10 flex-1 shadow-inner">
                      <img
                        src={cert.suggestedFilename}
                        alt={cert.title}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage(cert.suggestedFilename)}
                       />
                       </div>


                    {/* Bottom dismissal helper for touch users */}
                    {isManuallyRevealed && (
                      <button 
                        onClick={() => setActiveMobileReveal(null)}
                        className="mt-2 text-[10px] bg-red-500/20 text-red-200 py-1 rounded w-full font-mono hover:bg-red-500/40 transition-colors block sm:hidden"
                      >
                        Close Tap Overlay
                      </button>
                    )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
      {selectedImage && (
       <div
         className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
         onClick={() => setSelectedImage(null)}
       >
         <img
           src={selectedImage}
           alt="Certificate Preview"
           className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/20"
         />
       </div>
      )}
    </section>
  );
}
