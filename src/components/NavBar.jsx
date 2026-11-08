import { useState } from "react";
import { Menu, X } from "lucide-react";
import wvgsclogo from "../assets/wvgsclogo.png";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#venues", label: "Training Venues" },
  { href: "#about", label: "About Us" },
  { href: "#founder", label: "Our Coach" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-3 bg-slate-950/60 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a href="#home" aria-label="Wave Gliders - back to home" className="group shrink-0">
          <img
            src={wvgsclogo}
            alt="Wave Gliders logo"
            className="h-9 sm:h-11 w-auto transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          />
        </a>

        <div className="hidden md:flex items-center rounded-full bg-white/5 border border-white/10 p-1.5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#join"
          className="hidden md:inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-6 py-2 shadow-lg shadow-cyan-900/40 hover:scale-105 active:scale-95 transition"
        >
          Join Us
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-3 p-3 rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-slate-200 hover:bg-white/10 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
          >
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}
