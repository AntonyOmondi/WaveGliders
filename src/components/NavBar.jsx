import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-white font-extrabold text-lg sm:text-xl tracking-wider hover:opacity-90 transition-opacity"
          >
            WAVE<span className="text-cyan-400">GLIDERS</span>
          </a>
        </div>

        {/* Desktop Navigation Links (Centered Glass Pill) */}
        <div className="hidden md:flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-1.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.3)]">
          <a 
            href="#home" 
            className="rounded-full px-5 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-all duration-200"
          >
            Home
          </a>
          <a 
            href="#events" 
            className="rounded-full px-5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/15 transition-all duration-200"
          >
            Events
          </a>
          <a 
            href="#service" 
            className="rounded-full px-5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/15 transition-all duration-200"
          >
            Services
          </a>
          <a 
            href="#about" 
            className="rounded-full px-5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/15 transition-all duration-200"
          >
            About Us
          </a>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#join"
            className="rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2 shadow-lg shadow-orange-950/40 border border-orange-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl flex flex-col gap-3">
          <a 
            href="#home" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl text-slate-200 hover:bg-white/10 font-medium"
          >
            Home
          </a>
          <a 
            href="#events" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl text-slate-200 hover:bg-white/10 font-medium"
          >
            Events
          </a>
          <a 
            href="#service" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl text-slate-200 hover:bg-white/10 font-medium"
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl text-slate-200 hover:bg-white/10 font-medium"
          >
            About Us
          </a>
          <a 
            href="#join" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-orange-500 text-white font-semibold shadow-md"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}