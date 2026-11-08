import { ShieldCheck, Trophy, Users, Sparkles, Target, Eye, Waves, GraduationCap, Mail, Phone, Globe } from 'lucide-react';
import facility from '../assets/facility.jpg';
import swimmingImg from '../assets/swimming-bg.jpg';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const card = "bg-white/5 backdrop-blur-md rounded-2xl border border-white/10";

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: "Expert Coaches", text: "Certified professionals with 10+ years of active pool experience." },
  { icon: Trophy, title: "Safety First Always", text: "Lifeguard-certified instructors adhering to international protocols." },
];

const VALUES = [
  { icon: ShieldCheck, title: "Safety First", text: "Water safety is our top priority. All training follows high safety standards.", accent: "cyan" },
  { icon: Trophy, title: "Excellence", text: "Striving for excellence in every stroke, every lesson, and every interaction.", accent: "orange" },
  { icon: Users, title: "Community", text: "Building a supportive environment where swimmers encourage each other to succeed.", accent: "cyan" },
  { icon: Sparkles, title: "Growth", text: "Fostering personal development through progressive, encouraging learning.", accent: "orange" },
];

const FACILITIES = [
  { icon: Waves, title: "Olympic-Sized Training Pools", text: "World standard 25-metre and 50-metre pools with separate lanes." },
  { icon: Waves, title: "Kids Training Pools", text: "Shallow pools designed specifically for children." },
  { icon: GraduationCap, title: "Classroom Facilities", text: "Theory classes and video analysis for stroke improvement." },
];

const CONTACTS = [
  { icon: Mail, label: "Email", value: "info@wavegliders.com" },
  { icon: Phone, label: "Phone / WhatsApp / SMS", value: "+254 700 123 456 | +254 701 583 427" },
  { icon: Globe, label: "Website", value: "www.wavegliders.com" },
];

const iconColor = (accent) => (accent === "orange" ? "text-orange-300 bg-orange-400/10" : "text-cyan-300 bg-cyan-400/10");

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-16 py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-950 via-cyan-950/30 to-slate-950">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionHeader
          eyebrow="Our Story"
          title={<>About <span className="text-cyan-400">Wave Gliders</span> Swim Club</>}
          subtitle="Transforming lives through aquatic excellence and comprehensive water safety."
        />

        {/* Who we are */}
        <Reveal>
          <div className={`${card} p-6 sm:p-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <img src={swimmingImg} alt="Wave Gliders team" loading="lazy" className="w-full h-80 sm:h-96 object-cover object-top hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="space-y-5">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-2xl font-bold text-white">Who We Are</h3>
                <p className="text-sm text-slate-400">Empowering swimmers of all ages & skill levels</p>
              </div>
              <p className="text-slate-300 leading-relaxed font-light">
                Wave Gliders Swim Club is a premier swimming academy dedicated to enhancing aquatic skills, competitive technique, and confidence. We focus on developing competitive athletes while prioritising absolute water safety for every learner.
              </p>
              <div className="space-y-3">
                {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-center gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-white/10">
                    <Icon className="w-6 h-6 text-cyan-300 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{title}</h4>
                      <p className="text-xs text-slate-400">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { icon: Target, title: "Our Mission", border: "border-t-cyan-400", color: "text-cyan-300", text: "At Wave Gliders, we train swimmers to move with the water, not fight against it. Our approach is rooted in building refined technique, body control, and smart racing. We believe that speed comes from skill, and every session is designed to develop swimmers who are strong, smooth, and efficient." },
            { icon: Eye, title: "Our Vision", border: "border-t-orange-500", color: "text-orange-300", text: "To become East Africa's top swimming club by offering a clear, progressive development pathway, from Learn-to-Swim through to elite competition, empowering athletes and coaches to reach their full potential." },
          ].map(({ icon: Icon, title, border, color, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className={`${card} ${border} border-t-4 h-full p-8 flex flex-col items-center text-center gap-4`}>
                <div className="p-3 bg-slate-900/70 rounded-2xl border border-white/10"><Icon className={`w-8 h-8 ${color}`} /></div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-slate-300 font-light leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Core Values</h3>
            <p className="text-sm text-slate-400 mt-1">The principles that guide everything we do in and out of the water</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, text, accent }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className={`${card} h-full p-6 text-center space-y-3 hover:-translate-y-1 hover:border-cyan-400/40 transition duration-300`}>
                  <div className={`inline-flex p-3 rounded-full ${iconColor(accent)}`}><Icon className="w-6 h-6" /></div>
                  <h4 className="text-lg font-bold text-white">{title}</h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <Reveal>
          <div className={`${card} p-6 sm:p-8 space-y-6`}>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h3 className="text-2xl font-bold text-white">Our Facilities</h3>
              <p className="text-sm text-slate-400">State-of-the-art aquatic training environment</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <img src={facility} alt="Pool facility" loading="lazy" className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-3.5">
                {FACILITIES.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="bg-slate-900/60 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                    <div className="p-2 bg-cyan-400/10 rounded-lg"><Icon className="w-5 h-5 text-cyan-300" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{title}</h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contacts */}
        <Reveal>
          <div id="join" className={`${card} scroll-mt-24 border-t-4 border-t-orange-500 p-6 sm:p-10 text-center`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Join the Club</h3>
            <p className="text-slate-400 mt-2 mb-8">Get in touch to book a programme or ask any question.</p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {CONTACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-slate-900/60 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Icon className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="text-sm font-semibold text-white break-words">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
