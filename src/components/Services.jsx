import { useEffect, useState } from 'react';
import { Clock, Info, Calendar, X, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const SERVICES_DATA = [
  {
    id: 1,
    title: "Stroke Development & Competitive Squad",
    badge: "Competitive & Squad",
    currency: "Ksh.",
    price: "15,000",
    duration: "Per Month",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    description: "Refine your technique across all four strokes, build race-pace endurance, and train for regional and national galas.",
    overview: "Designed for swimmers who can already swim independently and are ready to level up their speed, efficiency, and race strategy. Led by certified coaching, this squad bridges the gap between basic swimming and competitive gala performance.",
    listHeading: "What You'll Master",
    list: [
      "Biomechanics and technical efficiency across all four competitive strokes (Freestyle, Backstroke, Breaststroke, Butterfly)",
      "Explosive starts, streamlines, and fast flip-turns",
      "Race-pace endurance (USRPT) and dryland conditioning",
      "Preparation and representation at local, regional, and national swimming galas"
    ],
    feeNote: "excludes pool entry fees",
    gear: "Swimsuit, goggles, swim cap, kickboard, pull buoy, fins, and hand paddles",
    cta: "Join Competitive Squad"
  },
  {
    id: 2,
    title: "Junior Learn-to-Swim",
    badge: "Kids & Juniors",
    currency: "Ksh.",
    price: "15,000",
    duration: "Per Month",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80",
    description: "Fun, safety-first water confidence lessons designed to take young swimmers from their very first splash to independent swimming.",
    overview: "A supportive, high-engagement programme built to make children safe, confident, and happy in the water. We break swimming down into fun, achievable milestones so kids progress without fear or pressure.",
    listHeading: "What Your Child Will Learn",
    list: [
      "Water safety, breath control, and floating independently",
      "Kicking mechanics and body balance in the water",
      "Foundational Freestyle and Backstroke coordination",
      "Deep-water confidence and transitioning toward Stroke School"
    ],
    feeNote: "excludes pool entry fees",
    gear: "Comfortable swimsuit, well-fitted goggles, swim cap, and towel",
    cta: "Enrol Your Child"
  },
  {
    id: 3,
    title: "Adult & Masters Swimming",
    badge: "All Levels",
    currency: "Ksh.",
    price: "15,000",
    duration: "Per Month",
    image: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=800&q=80",
    description: "Conquer a fear of deep water, master lap swimming for fitness, or train alongside our competitive Masters squad—at any age.",
    overview: "It is never too late to learn to swim—or to get back into competitive shape. Whether you are stepping into the deep end for the very first time or training for fitness and Masters galas, our adult sessions are judgment-free and goal-oriented.",
    listHeading: "Choose Your Track",
    list: [
      "Adult Beginners: Overcome water anxiety, master rhythmic breathing, and learn to swim full lengths smoothly.",
      "Fitness & Masters: Structured lap workouts, stroke correction, and endurance training for active adults and Masters athletes."
    ],
    feeNote: "excludes pool entry fees",
    gear: "Swimsuit, goggles, and swim cap",
    cta: "Book Adult Session"
  },
  {
    id: 4,
    title: "Private & House-Call Lessons",
    badge: "1-on-1 Coaching",
    currency: "Ksh.",
    price: "", // TODO: client to confirm the 4-lesson package price
    duration: "4 Lessons",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80",
    description: "Personalized, one-on-one coaching tailored entirely to your pace—available at our partner pools or in the comfort of your own private pool.",
    overview: "Maximum focus, faster progress, and flexible scheduling. Ideal for beginners wanting undivided attention, busy professionals, or families with access to a home or estate pool.",
    listHeading: "What's Included",
    list: [
      "100% customized lesson plans built around your specific goals",
      "Immediate, real-time stroke and breathing feedback",
      "Flexible scheduling at select club pools or your preferred location"
    ],
    feeLabel: "House-Call Package",
    feeNote: "for 4 dedicated sessions (custom group/family rates available on request)",
    gear: "Swimsuit, goggles, and swim cap",
    cta: "Request Private Coaching"
  }
];

const WHATSAPP_URL = "https://wa.me/254726462641?text=Hi%20Wave%20Gliders%2C%20I%27d%20like%20to%20know%20more%20about%20your%20swim%20programmes.";

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
        title="Swim Programmes"
        subtitle="Whether you’re taking your first breath in the water or chasing podium finishes, we have a lane built for your goals."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{service.description}</p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-1">
                    {service.price ? (
                      <>
                        <span className="text-xs font-medium text-slate-400">{service.currency}</span>
                        <span className="text-2xl font-extrabold text-white">{service.price}</span>
                      </>
                    ) : (
                      <span className="text-base font-bold text-white">Ask for rates</span>
                    )}
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
                    Book a Session
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-2xl mx-auto mt-10 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-sm sm:text-base font-medium text-white text-center hover:bg-emerald-500/20 transition"
      >
        <MessageCircle className="w-5 h-5 text-emerald-300 shrink-0" />
        <span>Not sure which programme fits? <span className="font-bold text-emerald-300 underline underline-offset-4">Chat with us on WhatsApp</span></span>
      </a>

      <div className="max-w-2xl mx-auto mt-4 flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-orange-400/10 border border-orange-400/40 text-base sm:text-lg font-medium text-white text-center">
        <Info className="w-5 h-5 text-orange-300 shrink-0" />
        <span>
          <span className="font-bold text-orange-300">Note:</span> Monthly coaching fees do not include venue pool entry charges.
        </span>
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
            className="relative bg-slate-900 border border-white/10 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
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

            <p className="text-sm text-slate-300 mt-4 leading-relaxed">{selected.overview}</p>

            <h4 className="mt-5 mb-2 text-sm font-bold text-cyan-300">{selected.listHeading}</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {selected.list.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 my-5 space-y-3 text-sm">
              <div>
                <span className="text-slate-400">{selected.feeLabel || "Fee"}: </span>
                <span className="font-bold text-white">
                  {selected.price ? `${selected.currency} ${selected.price}` : "Ksh. \u2026"}
                  {selected.price && selected.duration === "Per Month" ? " per month" : ""}
                </span>
                <span className="text-slate-300"> ({selected.feeNote})</span>
              </div>
              <div>
                <span className="text-slate-400">Gear Needed: </span>
                <span className="text-slate-200">{selected.gear}</span>
              </div>
            </div>

            <a
              href="#join"
              onClick={() => setSelected(null)}
              className="block text-center py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
            >
              {selected.cta}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
