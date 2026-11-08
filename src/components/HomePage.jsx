import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import bgImage from "../assets/swimming-bg.jpg";

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-800/40 to-ocean-700" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl text-center"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-cyan-100 bg-cyan-400/10 border border-cyan-300/30 rounded-full backdrop-blur-md">
          Swimming lessons & competitive coaching · Nairobi
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white drop-shadow-lg">
          Wave{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Gliders
          </span>
          <br />
          Swim Club
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-slate-200 text-base sm:text-xl font-light leading-relaxed">
          Empowering swimmers of all ages through world-class coaching, personalised training, and a
          passion for excellence in and beyond the water.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-900/50"
          >
            Our Programmes
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white rounded-xl bg-white/10 border border-white/25 backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            About Us
          </motion.a>
        </div>
      </motion.div>

      <a href="#programmes" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
