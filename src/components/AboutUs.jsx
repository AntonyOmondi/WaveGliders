import wavegliders1 from '../assets/wavegliders1.JPG';

// --- Lightweight SVG Icons (Zero package dependency errors) ---
const TargetIcon = () => (
  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2 0h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2 0h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const WavesIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 00.9-.09M3 15a4 4 0 014-4h9a5 5 0 01.9.09M3 15V9a4 4 0 014-4h9a5 5 0 01.9.09" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-24 text-slate-100 py-12 sm:px-6 bg-slate-900/70 lg:px-12 mx-auto space-y-16">
      
      {/* 1. Header Banner */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          About <span className="text-cyan-400">Wave Gliders</span> Swim Club
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
          Transforming lives through aquatic excellence and comprehensive water safety.
        </p>
        <div className="flex items-center justify-center gap-1.5 pt-2">
          <span className="h-1 w-12 bg-cyan-500 rounded-full"></span>
          <span className="h-1 w-6 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* 2. Overview Section */}
      <section className="bg-slate-700/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-600/80 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-slate-600 shadow-xl">
            <img 
              src={wavegliders1} 
              alt="Wave Gliders Team" 
              className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-2xl font-bold text-white">Who We Are</h2>
              <p className="text-xs text-slate-300">Empowering swimmers of all ages & skill levels</p>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Wave Gliders Swim Club is a premier swimming academy dedicated to enhancing aquatic skills, competitive technique, and confidence. We focus on developing competitive athletes while prioritizing absolute water safety for every learner.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-600/60">
                <ShieldCheckIcon />
                <div>
                  <h3 className="text-sm font-semibold text-white">Expert Coaches</h3>
                  <p className="text-xs text-slate-300">Certified professionals with 10+ years of active pool experience.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-600/60">
                <TrophyIcon />
                <div>
                  <h3 className="text-sm font-semibold text-white">Safety First Always</h3>
                  <p className="text-xs text-slate-300">Lifeguard-certified instructors adhering to international protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Our Mission */}
        <div className="bg-slate-700/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-t-4 border-t-cyan-400 border border-slate-600/80 shadow-lg flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-600">
            <TargetIcon />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Mission</h2>
          <p className="text-sm text-slate-200 font-light leading-relaxed">
            To enhance swimming and aquatic safety skills by developing confident competitive swimmers while guaranteeing safety and personal development for every age group.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-slate-700/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-t-4 border-t-orange-500 border border-slate-600/80 shadow-lg flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-600">
            <EyeIcon />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Vision</h2>
          <p className="text-sm text-slate-200 font-light leading-relaxed">
            To be the leading provider of professional swimming instruction and aquatic safety training, recognized regionally for excellence in methodologies and safety standards.
          </p>
        </div>

      </section>

      {/* 4. Core Values */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Core Values</h2>
          <p className="text-xs sm:text-sm text-slate-300">The principles that guide everything we do in and out of the water</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-700/80 backdrop-blur-md p-6 rounded-2xl border border-slate-600/80 text-center space-y-3 hover:border-cyan-400 transition-colors duration-200">
            <div className="inline-block p-3 rounded-full bg-slate-800/80 border border-slate-600">
              <ShieldCheckIcon />
            </div>
            <h3 className="text-lg font-bold text-white">Safety First</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Water safety is our top priority. All training follows high safety standards.
            </p>
          </div>

          <div className="bg-slate-700/80 backdrop-blur-md p-6 rounded-2xl border border-slate-600/80 text-center space-y-3 border-t-2 border-t-orange-500 hover:border-orange-400 transition-colors duration-200">
            <div className="inline-block p-3 rounded-full bg-slate-800/80 border border-slate-600">
              <TrophyIcon />
            </div>
            <h3 className="text-lg font-bold text-white">Excellence</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Striving for excellence in every stroke, every lesson, and every interaction.
            </p>
          </div>

          <div className="bg-slate-700/80 backdrop-blur-md p-6 rounded-2xl border border-slate-600/80 text-center space-y-3 hover:border-cyan-400 transition-colors duration-200">
            <div className="inline-block p-3 rounded-full bg-slate-800/80 border border-slate-600">
              <UsersIcon />
            </div>
            <h3 className="text-lg font-bold text-white">Community</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Building a supportive environment where swimmers encourage each other to succeed.
            </p>
          </div>

          <div className="bg-slate-700/80 backdrop-blur-md p-6 rounded-2xl border border-slate-600/80 text-center space-y-3 hover:border-orange-400 transition-colors duration-200">
            <div className="inline-block p-3 rounded-full bg-slate-800/80 border border-slate-600">
              <SparklesIcon />
            </div>
            <h3 className="text-lg font-bold text-white">Growth</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Fostering personal development through progressive, encouraging learning.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Facilities Section */}
      <section className="bg-slate-700/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-600/80 space-y-6">
        <div className="border-l-4 border-cyan-400 pl-4">
          <h2 className="text-2xl font-bold text-white">Our Facilities</h2>
          <p className="text-xs text-slate-300">State-of-the-art aquatic training environment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden rounded-xl border border-slate-600">
            <img 
              src={wavegliders1} 
              alt="Pool Facility" 
              className="w-full h-72 sm:h-80 object-cover"
            />
          </div>

          <div className="space-y-3.5">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/60 flex items-start gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <WavesIcon />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Olympic-Sized Training Pools</h3>
                <p className="text-xs text-slate-300 font-light mt-0.5">Temperature-controlled 25-meter pools with separate lanes.</p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/60 flex items-start gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <WavesIcon />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Kids Training Pools</h3>
                <p className="text-xs text-slate-300 font-light mt-0.5">Shallow, warm-water pools designed specifically for children.</p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/60 flex items-start gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <AcademicCapIcon />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Classroom Facilities</h3>
                <p className="text-xs text-slate-300 font-light mt-0.5">Theory classes and video analysis for stroke improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact & Payment Info Table */}
      <section className="bg-slate-700/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-600/80 border-t-4 border-t-orange-500 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Contact & Payment Information
        </h2>

        <div className="divide-y divide-slate-600/60 text-sm">
          <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="text-slate-300 font-medium">Email:</span>
            <span className="text-white font-semibold">info@wavegliders.com</span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="text-slate-300 font-medium">Phone / WhatsApp / SMS:</span>
            <span className="text-white font-semibold">+254 700 123 456 | +254 701 583 427</span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="text-slate-300 font-medium">Website:</span>
            <span className="text-cyan-400 font-semibold">www.wavegliders.com</span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="text-slate-300 font-medium">M-PESA Paybill:</span>
            <span className="text-orange-400 font-semibold">Business Number: 247247</span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <span className="text-slate-300 font-medium">Account Number:</span>
            <span className="text-white font-semibold">0701583427</span>
          </div>
        </div>
      </section>

    </div>
  );
}