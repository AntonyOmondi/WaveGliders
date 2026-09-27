import { Sparkles, Trophy, Palette, HeartHandshake, Quote } from 'lucide-react';
import founderImg from '../assets/founder.JPG'; // Replace with Coach Stephanie's photo

export default function MeetCEO() {
  return (
    <section id="founder" className="scroll-mt-28 pt-12 pb-16 px-4 bg-cyan-900/60 mt-16 sm:px-6 lg:px-12 mx-auto text-slate-100 font-sans">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          Leadership & Vision
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Meet the <span className="text-cyan-400">Founder</span> & <span className="text-orange-500">Head Coach</span>
        </h2>
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <span className="h-1 w-12 bg-cyan-500 rounded-full"></span>
          <span className="h-1 w-6 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* MAIN CONTENT CARD */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* LEFT SIDE: PHOTO SECTION WITH TITLES AT BOTTOM */}
          <div className="w-full lg:w-5/12 relative group min-h-[420px] lg:min-h-[600px] flex flex-col justify-end overflow-hidden bg-slate-950">
            {/* Founder Image */}
            <img 
              src={founderImg} 
              alt="Stephanie Ondieki - Founder & Head Coach" 
              className="absolute inset-0 w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/80 lg:block hidden"></div>

            {/* Quote Badge overlay top-right */}
            <div className="absolute top-4 right-4 max-w-[220px] sm:max-w-[260px] z-10">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/60 p-3 rounded-xl shadow-xl flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-[11px] sm:text-xs text-slate-200 italic font-light leading-snug">
                "Water is where discipline meets art. I built Wave Gliders to teach both."
                </p>
            </div>
            </div>

            {/* Photo Bottom Titles Container */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2 border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Stephanie Joli Ondieki
              </h3>
              <p className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                Founder & High-Performance Head Coach
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                  <Trophy className="w-3 h-3 text-orange-400" /> High Performance
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                  <Palette className="w-3 h-3 text-cyan-400" /> Fine Artist
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DESCRIPTION CONTENT */}
          <div className="w-full lg:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
            
            {/* Bio Story Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                Hi, I’m <span className="text-cyan-400">Stephanie Joli Ondieki</span>
              </h4>
              
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                As a <strong className="font-semibold text-white">High-Performance Swim Coach</strong>, my world revolves around technical excellence, split times, and long-term athlete development. But what truly sets my coaching apart is my background as a <strong className="font-semibold text-white">Fine Artist</strong>.
              </p>

              <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80 relative">
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  To me, a swimmer’s stroke isn’t just biomechanics—it’s a <span className="text-orange-400 font-medium">living masterpiece</span>. That artistic eye for form, rhythm, and spatial detail allows me to see subtle mechanical tweaks that others miss, refining technique until high performance feels effortless.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Wave Gliders was birthed by grace and built on purpose. I founded this club not just to track lap times, but to steward each athlete’s God-given potential through intentional, data-driven mentorship.
              </p>
            </div>

            {/* Why Wave Gliders Box */}
            <div className="bg-slate-950/80 p-5 sm:p-6 rounded-xl border border-slate-800 border-l-4 border-l-cyan-400 space-y-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-cyan-400" />
                Why Wave Gliders?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                We don't just build faster swimmers—we shape resilient, confident leaders inside and outside the pool. Through structured performance systems, we prepare our athletes to break through competitive milestones with confidence and grit.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Our vision goes far beyond current lane lines: we are building Wave Gliders into a <span className="text-cyan-400 font-medium">premier aquatic powerhouse</span>, expanding across all disciplines—from competitive swimming and open water to artistic swimming and water polo.
              </p>
            </div>

            {/* Closing Motto Banner */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-orange-950/30 border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm font-semibold italic text-slate-200">
                  "Every lap is a stroke of intent. Every race is a canvas. Welcome to Wave Gliders."
                </p>
                <a 
                  href="#join" 
                  className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:to-blue-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-lg shadow-orange-950/50 transition-colors duration-200"
                >
                  Join Our Team
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}