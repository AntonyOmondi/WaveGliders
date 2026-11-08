import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-14 space-y-4"
    >
      {eyebrow && (
        <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 text-base sm:text-lg font-light">{subtitle}</p>}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        <span className="h-1 w-12 bg-cyan-400 rounded-full" />
        <span className="h-1 w-6 bg-orange-500 rounded-full" />
      </div>
    </motion.div>
  );
}
