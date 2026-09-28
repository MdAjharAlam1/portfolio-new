import { motion } from 'framer-motion';
import { SERVICES } from '../data/content';
import { staggerContainer, fadeInUp, SectionHeader } from '../lib/animation';

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Services"
          title="What I Do"
          subtitle="End-to-end development services covering the full spectrum of modern web application building."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeInUp}
              className="group relative p-5 sm:p-7 rounded-3xl bg-ink-900/60 border border-ink-800 hover:border-lime-400/20 hover:shadow-2xl hover:shadow-lime-400/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/6 to-transparent" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-5 sm:mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-ink-950/60 border border-ink-800 flex items-center justify-center group-hover:bg-lime-400 group-hover:border-lime-400 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-ink-300 group-hover:text-ink-950 transition-colors duration-300" />
                  </div>
                  <span className="text-3xl font-serif text-ink-700 group-hover:text-lime-400/30 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-normal text-ink-50 mb-3">{service.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
