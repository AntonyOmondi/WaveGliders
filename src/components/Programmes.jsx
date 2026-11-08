import { Award, Target, ShieldCheck } from 'lucide-react';
import person from '../assets/coach.jpg';
import Reveal from './Reveal';

const FEATURES = [
  { icon: Award, title: "Certified Coaches", text: "Professional coaches with over 10 years of experience." },
  { icon: Target, title: "Proven Training Programmes", text: "Personally tailored programmes designed to deliver quality and results." },
  { icon: ShieldCheck, title: "Safety First", text: "Lifeguard-certified instructors and strict emergency protocols." },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-20 px-4 sm:px-6 lg:px-12 bg-ocean-700">
      <Reveal className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-cyan-950/50">
          <img
            src={person}
            alt="Wave Gliders coach with swimmers"
            className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why swim with <span className="text-cyan-400">Wave Gliders</span>?
          </h2>
          <div className="flex items-center gap-1.5 mt-3 mb-8">
            <span className="h-1 w-12 bg-cyan-400 rounded-full" />
            <span className="h-1 w-6 bg-orange-500 rounded-full" />
          </div>

          <div className="flex flex-col gap-4">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.07] transition"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm text-slate-400 font-light mt-0.5">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
