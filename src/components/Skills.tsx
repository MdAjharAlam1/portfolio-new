import { motion } from 'framer-motion';
import { HERO_TECHS } from '../data/content';
import { Reveal, SectionHeader, fadeInUp, staggerContainer } from '../lib/animation';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Tech stack"
          title="Tools I build with"
          subtitle="A practical stack for shipping polished products from idea to production."
          center
        />

        <Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
          >
            {HERO_TECHS.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="group relative flex items-center gap-3 p-4 rounded-2xl bg-ink-900/60 border border-ink-800 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-ink-900 transition-all duration-300"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-ink-950/70 border border-ink-800 flex items-center justify-center group-hover:scale-110 group-hover:border-lime-400/30 transition-transform">
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                </div>
                <span className="text-sm font-semibold text-ink-100 leading-tight">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
