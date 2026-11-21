import { Check, Info, MessageCircle, Sparkles, User, Users, Waves } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const WHATSAPP_URL = "https://wa.me/254726462641?text=Hi%20Wave%20Gliders%2C%20I%27d%20like%20to%20know%20more%20about%20your%20training%20packages.";

const PACKAGES = [
  {
    id: 1,
    icon: User,
    badge: "Adults · 1-on-1",
    title: "Adult Individual Coaching",
    description: "Personalized sessions tailored to your goals, pace, and ability — perfect for adults who want focused, high-impact training.",
    options: [
      { label: "Single Session", price: "2,000", note: "Ideal for trial or tune-up sessions." },
      { label: "4-Session Pack", price: "7,000", note: "Build consistency, improve technique, and gain confidence." },
      { label: "15-Session Pack", price: "20,000", note: "Our best value — long-term progress and noticeable transformation.", best: true }
    ],
    perks: [
      "Learn to swim with confidence",
      "Boost fitness through low-impact, full-body workouts",
      "Better mobility, therapy, or mental clarity",
      "Train smart for Masters competitions"
    ],
    monthly: { price: "15,000", unit: "month", text: "Prefer ongoing support and routine without counting sessions?" }
  },
  {
    id: 2,
    icon: Waves,
    badge: "All Ages · 1-on-1",
    title: "Individual Swimmer Packages",
    description: "One-on-one coaching for every swimmer, from learn-to-swim to advanced competitive training.",
    options: [
      { label: "Single Session", price: "2,000" },
      { label: "4 Sessions", price: "6,500" },
      { label: "12 Sessions", price: "19,500" }
    ],
    perks: [
      "Undivided coaching attention",
      "Faster progress and better technique"
    ],
    monthly: { price: "15,000", unit: "month", text: "Monthly Unlimited Sessions — best value if you're serious about improving faster." }
  },
  {
    id: 3,
    icon: Users,
    badge: "2+ Swimmers",
    title: "Group Packages",
    description: "Train with friends, siblings, or teammates and stay motivated together.",
    options: [
      { label: "Single Session", price: "1,500", unit: "person" },
      { label: "4 Sessions", price: "5,000", unit: "person" },
      { label: "9 Sessions", price: "10,000", unit: "person" },
      { label: "12 Sessions", price: "13,500", unit: "person" }
    ],
    perks: [
      "Perfect for consistent training and shared progress"
    ],
    monthly: { price: "15,000", unit: "person / month", text: "Monthly Unlimited Sessions for the whole crew." }
  }
];

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-16 py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950">
      <SectionHeader
        eyebrow="Flexible Training & Payment"
        title="Training Packages"
        subtitle="Prefer a different mode of training or payment? Choose 1-on-1 or group sessions, pay per session or in packs, or go monthly for unlimited access."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg, i) => {
          const Icon = pkg.icon;
          return (
            <Reveal key={pkg.id} delay={i * 0.1} className="h-full">
              <article className="h-full flex flex-col bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/50 transition duration-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/70 text-orange-300 border border-orange-400/30">
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white leading-snug">{pkg.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{pkg.description}</p>

                <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
                  {pkg.options.map((o) => (
                    <li key={o.label} className="py-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white flex items-center gap-2">
                          {o.label}
                          {o.best && (
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-400/15 text-orange-300 border border-orange-400/30">
                              Best value
                            </span>
                          )}
                        </p>
                        {o.note && <p className="text-xs text-slate-400 mt-0.5">{o.note}</p>}
                      </div>
                      <p className="shrink-0 text-right">
                        <span className="text-xs text-slate-400">Ksh. </span>
                        <span className="text-lg font-extrabold text-white">{o.price}</span>
                        {o.unit && <span className="block text-[11px] text-slate-400">per {o.unit}</span>}
                      </p>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {pkg.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-cyan-300 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="rounded-xl bg-gradient-to-r from-cyan-500/15 to-blue-600/15 border border-cyan-400/30 p-4">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Monthly Unlimited
                    </p>
                    <p className="mt-1">
                      <span className="text-xs text-slate-300">Ksh. </span>
                      <span className="text-2xl font-extrabold text-white">{pkg.monthly.price}</span>
                      <span className="text-xs text-slate-300"> / {pkg.monthly.unit}</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-300">{pkg.monthly.text}</p>
                  </div>
                  <a
                    href="#join"
                    className="mt-4 py-2.5 px-4 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950/50 transition active:scale-95 flex items-center justify-center"
                  >
                    Choose This Package
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-2xl mx-auto mt-10 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-sm sm:text-base font-medium text-white text-center hover:bg-emerald-500/20 transition"
      >
        <MessageCircle className="w-5 h-5 text-emerald-300 shrink-0" />
        <span>Ready to dive in? <span className="font-bold text-emerald-300 underline underline-offset-4">Reach out on WhatsApp</span></span>
      </a>

      <div className="max-w-2xl mx-auto mt-4 flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-orange-400/10 border border-orange-400/40 text-base sm:text-lg font-medium text-white text-center">
        <Info className="w-5 h-5 text-orange-300 shrink-0" />
        <span>
          <span className="font-bold text-orange-300">Note:</span> All package prices are exclusive of pool fees.
        </span>
      </div>
    </section>
  );
}
