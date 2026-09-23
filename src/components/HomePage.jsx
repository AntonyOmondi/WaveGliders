import { motion } from "framer-motion";

export default function HomePage({ onProgrammesClick, onAboutClick }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 py-16 sm:py-20 lg:px-16 selection:bg-slate-800 selection:text-white">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Header */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl z-10"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-100 bg-cyan-950 border border-cyan-800/60 rounded-full backdrop-blur-md">
          Elite Swimming & Training
        </span>
        <h1 className="text-balance text-white text-shadow-lg text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-extrabold tracking-tight leading-[0.95]">
          Wave <span className="text-slate-900">Gliders</span> Swim Club
        </h1>
      </motion.div>

      {/* Welcome Card & CTA Section */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl self-center w-full z-10 mt-12"
      >
        <div className="p-6 sm:p-8 rounded-2xl bg-gray-700/60 backdrop-blur-md border border-slate-500/90 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
          
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Welcome to Wave Gliders Swim Club
          </h2>

          <p className="mt-3 max-w-xl text-slate-100 text-sm sm:text-base font-light leading-relaxed">
            Empowering swimmers of all ages through world-class coaching, personalized training, and a passion for excellence in and beyond the water.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto">
            
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onProgrammesClick}
              className="w-full sm:w-44 py-3 px-6 text-sm font-semibold text-white rounded-xl bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-950/50 transition-colors duration-200"
            >
              Our Programmes
            </motion.button>

            {/* Secondary Glassmorphism Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onAboutClick}
              className="w-full sm:w-44 py-3 px-6 text-sm font-semibold text-slate-200 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-colors duration-200"
            >
              About Us
            </motion.button>

          </div>
        </div>
      </motion.div>

    </div>
  );
}