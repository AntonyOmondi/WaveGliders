import person from '../assets/person.JPG';

export default function Programmes() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
        
        {/* Left Side: Hero / Feature Image */}
        <div className="w-full lg:w-1/2 shrink-0 overflow-hidden rounded-xl border border-slate-700/60 shadow-xl">
          <img 
            src={person} 
            alt="Wave Gliders Swim Club" 
            className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Right Side: Text & Feature Cards */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Header */}
          <div className="mb-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome to Wave Gliders Swim Club
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-2">
              <span className="h-1 w-10 bg-slate-600 rounded-full"></span>
              <span className="h-1 w-6 bg-orange-500 rounded-full"></span>
            </div>
          </div>

          {/* Feature List Cards */}
          <div className="flex flex-col gap-3.5">
            
            {/* Feature 1 */}
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-slate-700 transition-colors duration-200">
              <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                Certified Coaches
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Professional coaches with over 10+ years of experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-slate-700 transition-colors duration-200">
              <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                Proven Training Programmes
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Personally tailored programmes designed to guarantee quality and results.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-slate-700 transition-colors duration-200">
              <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                Safety First
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Lifeguard-certified instructors & strict emergency protocols.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}