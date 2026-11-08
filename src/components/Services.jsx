import { useEffect, useState } from 'react';
import { Clock, Info, Calendar, X } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const SERVICES_DATA = [
  {
    id: 1,
    title: "Competitive swimming classes",
    badge: "Advanced",
    currency: "Ksh.",
    price: "15,000",
    duration: "16 training days or one month",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    description: "Designed for swimmers looking to master advanced strokes, flip turns, and endurance building for competitive swimming levels."
  },
  {
    id: 2,
    title: "Learn to Swim - Under 5 years",
    badge: "Minors",
    currency: "Ksh.",
    price: "15,000",
    duration: "18 days",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80",
    description: "An intensive youth program focusing on sprint techniques, stream-line positioning, and stroke efficiency."
  },
  {
    id: 3,
    title: "Adult Basic swimming - Beginners and Competitive",
    badge: "Advanced",
    currency: "Ksh.",
    price: "20,000",
    duration: "One month",
    image: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=800&q=80",
    description: "Tailored adult water confidence and stroke technique sessions aimed at building stamina and water safety."
  }
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <section id="services" className="scroll-mt-16 py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 via-cyan-950/40 to-slate-950">
      <SectionHeader
        eyebrow="Programmes & Pricing"
        title="Our Services"
        subtitle="Swimming programmes tailored for every age group and skill level."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.1} className="h-full">
            <article className="group h-full flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/50 transition duration-300">
              <div className="relative h-52 overflow-hidden bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-orange-300 border border-orange-400/30">
                  {service.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white leading-snug">{service.title}</h3>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-medium text-slate-400">{service.currency}</span>
                    <span className="text-2xl font-extrabold text-white">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto pt-6">
                  <button
                    onClick={() => setSelected(service)}
                    className="cursor-pointer py-2.5 px-4 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5" />
                    View Details
                  </button>
                  <a
                    href="#join"
                    className="py-2.5 px-4 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950/50 transition active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative bg-slate-900 border border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-orange-300">{selected.badge}</span>
            <h3 className="text-xl font-bold text-white mt-1 pr-6">{selected.title}</h3>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 my-5 space-y-2 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Fee</span>
                <span className="font-bold text-white">{selected.currency} {selected.price}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Duration</span>
                <span className="font-bold text-white">{selected.duration}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">{selected.description}</p>

            <a
              href="#join"
              onClick={() => setSelected(null)}
              className="block text-center py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
            >
              Book this programme
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
