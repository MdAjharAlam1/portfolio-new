import { motion } from 'framer-motion';
import { EDUCATIONS } from '../data/content';
import { SectionHeader, staggerContainer, fadeInUp } from '../lib/animation';

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Education" title="Academic Background" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {EDUCATIONS.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              className="group relative p-7 lg:p-8 rounded-3xl bg-ink-900/60 border border-ink-800 hover:border-lime-400/20 hover:bg-ink-900/80 transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <edu.icon className="w-7 h-7 text-lime-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 rounded-md">
                      {edu.degree}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-normal text-ink-50 leading-tight">
                    {edu.field}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-ink-500 mb-4">
                <span className="font-mono">{edu.period}</span>
              </div>

              <p className="text-sm text-ink-400 leading-relaxed mb-4">
                {edu.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-ink-300">
                <span className="font-medium text-ink-200">{edu.institution}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
