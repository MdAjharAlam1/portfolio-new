import { motion } from 'framer-motion';
import { PRINCIPLES } from '../data/content';
import { staggerContainer, fadeInUp, Reveal } from '../lib/animation';

export default function Principles() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-900/40 border-y border-ink-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-lime-400/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-lime-400" />
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-[0.2em]">Why Work With Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.1] sm:leading-[1.05] text-ink-50">
            More than just
            <span className="block italic text-gradient">writing code.</span>
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.number}
              variants={fadeInUp}
              className="group relative p-5 sm:p-7 rounded-3xl bg-ink-950/40 border border-ink-800 backdrop-blur-sm hover:bg-ink-900/60 hover:border-ink-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <p.icon className="w-5 h-5 text-lime-400" />
                </div>
                <span className="text-sm font-mono text-ink-600 group-hover:text-lime-400/40 transition-colors">
                  {p.number}
                </span>
              </div>
              <h3 className="text-lg font-serif font-normal text-ink-50 mb-2.5">{p.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
