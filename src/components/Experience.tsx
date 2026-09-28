import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/content';
import { Reveal, SectionHeader } from '../lib/animation';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 60%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-ink-900/30 border-y border-ink-800">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Experience" title="Work Experience" />

        <div ref={containerRef} className="relative">
          {/* Timeline track */}
          <div className="absolute left-4 lg:left-1/2 top-2 bottom-2 w-px bg-ink-700 lg:-translate-x-1/2" />

          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 lg:left-1/2 top-2 w-px bg-gradient-to-b from-lime-400 to-emerald-500 lg:-translate-x-1/2 origin-top"
          />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative flex lg:justify-center mb-12 last:mb-0">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute left-4 lg:left-1/2 top-6 w-4 h-4 rounded-full bg-lime-400 ring-4 ring-ink-950 z-10 lg:-translate-x-1/2 shadow-lg shadow-lime-400/30"
              />

              {/* Card */}
              <Reveal
                className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}
              >
                <div className="group relative p-5 sm:p-7 lg:p-8 rounded-2xl bg-ink-900/80 backdrop-blur-sm border border-ink-800 hover:border-ink-700 hover:shadow-2xl hover:shadow-black/30 transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-normal text-ink-50">{exp.company}</h3>
                      <p className="text-sm font-medium text-lime-400 mt-0.5">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-[11px] font-semibold text-ink-500 uppercase tracking-[0.15em] mb-4">
                      Key Responsibilities
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {exp.responsibilities.map((r, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          className="flex items-start gap-2.5 text-sm text-ink-300"
                        >
                          <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-lime-400" />
                          </span>
                          {r}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
