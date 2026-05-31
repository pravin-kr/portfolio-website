import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Heart } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xlgzpvrz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Message sent successfully ✅");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } else {
    alert("Something went wrong ❌");
  }
};

  const copyItem = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative border-t border-white/10">
      
      {/* Absolute ambient grid lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20 inline-block mb-3">
            08 / Communication Link
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let's build <span className="text-gradient">high-leverage workflows.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
            Recruiting top-tier talent requires operators who look beyond plain checklists. Contact me today to discuss data integration strategy, operational support, or enterprise management roles.
          </p>

          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Sleek Interactive Social Cards & Connect tags */}
          <div className="lg:col-span-6 space-y-6">
            
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block" />
              <span>Direct Coordinates</span>
            </h3>

            {/* Email Box */}
            <div className="glass-panel p-6 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-mono text-gray-400 block uppercase tracking-wider">Primary Email</span>
                  <span className="text-sm sm:text-base text-white font-semibold block truncate select-all">
                    pravinkrktr19@gmail.com
                  </span>
                </div>
              </div>

              <button
                onClick={() => copyItem('pravinkrktr19@gmail.com', 'email')}
                className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-2"
              >
                {copiedEmail ? "✓ Copied" : "Copy"}
              </button>
            </div>

            {/* Phone Box */}
            <div className="glass-panel p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-mono text-gray-400 block uppercase tracking-wider">Direct WhatsApp / Mobile</span>
                  <span className="text-sm sm:text-base text-white font-semibold block truncate select-all">
                    +91 9110104390
                  </span>
                </div>
              </div>

              <button
                onClick={() => copyItem('+91 9110104390', 'phone')}
                className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-2"
              >
                {copiedPhone ? "✓ Copied" : "Copy"}
              </button>
            </div>

            {/* Location block */}
            <div className="p-4 rounded-xl bg-gray-900 border border-white/5 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
              <div className="text-xs text-gray-300">
                <strong className="text-white">Based out of:</strong> Katihar, Bihar, India. <br />
                <span className="text-gray-500">Fully equipped for remote onboarding and global timezone communications.</span>
              </div>
            </div>

            {/* Interactive Social Buttons */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400 block mb-3 uppercase tracking-wider">External Networks</span>
              
              <div className="grid grid-cols-2 gap-4">
                
                {/* LinkedIn Link directly from resume */}
                <a
                  href="https://www.linkedin.com/in/pravin-kumar-70034b339"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/30 hover:bg-[#0a66c2]/20 transition-all flex items-center gap-3 group"
                >
                  <svg className="w-5 h-5 text-[#0a66c2] group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.34 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="text-[10px] text-gray-400 block font-mono truncate">pravin-kumar-70034b339</span>
                  </div>
                </a>


              </div>

            </div>

          </div>

          {/* Right Block: Instant Recruiter Fast-Dispatch Form */}
          <div className="lg:col-span-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Contact Form
              </h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Sends simulated dispatch directly to <code className="text-cyan-300 font-mono">pravinkrktr19@gmail.com</code> via live browser state validation.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-fade-in bg-cyan-950/30 rounded-xl border border-cyan-500/30 p-6">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                  <h4 className="text-white font-bold text-lg">Message Priority Dispatched!</h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed font-mono">
                    Thank you for reaching out. Your simulated communication payload has been verified successfully. Pravin Kumar will follow up at your provided coordinates shortly.
                  </p>
                  <div className="text-[10px] text-emerald-400 pt-2 font-mono">
                    ✓ STATUS: REGISTERED IN LIVE MEMORY
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Your Name / Organization <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Talent Acquisition Partner"
                      className="w-full bg-gray-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Direct Callback Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@enterprise.com"
                      className="w-full bg-gray-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                      Operational Objectives / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detailing proposed roles, analytics challenges, or project parameters..."
                      className="w-full bg-gray-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  

                </form>
              )}

            </div>

          </div>

        </div>

        {/* Brand Theme Suggestion & Memorable Footer Tagline */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center space-y-4">
          
          

          <p className="text-base sm:text-lg text-gray-300 font-bold italic tracking-tight max-w-2xl mx-auto">
            "Simplifying complexity isn't a job requirement; it's the professional standard.."
          </p>

          <div className="mt-16 pt-10 border-t border-white/10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

    {/* Left */}
    <div>
      <h2 className="text-3xl font-bold text-white">
        <span className="text-purple-400">Pravin Kumar</span>
      </h2>

      <p className="mt-4 text-gray-400 leading-relaxed">
        Transforming ideas into organized, impactful, and modern digital experiences.
      </p>
    </div>

    {/* Center */}
    <div>
      <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-4">
        Navigate
      </h3>

      <div className="flex flex-col gap-3 text-gray-300">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#experience" className="hover:text-white transition">Experience</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#education" className="hover:text-white transition">Education</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </div>

    {/* Right */}
    <div>
      <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-4">
        Connect
      </h3>

      <div className="flex flex-col gap-4 text-gray-300">
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p>pravinkrktr19@gmail.com</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Phone</p>
          <p>+91 9110104390</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">LinkedIn</p>
          <p>linkedin.com/in/pravin-kumar-70034b339/</p>
        </div>
      </div>
    </div>

  </div>
</div>

        </div>

      </div>

    </section>
  );
}
