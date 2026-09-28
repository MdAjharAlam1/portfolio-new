import { motion } from 'framer-motion';
import { Code2, Calendar, MapPin, Cloud } from 'lucide-react';
import { Reveal, Counter, staggerContainer, fadeInUp, SectionHeader } from '../lib/animation';
import { PROFILE } from '../data/content';

export default function About() {
  const stats: { value?: number; suffix?: string; label: string; decimals?: number; text?: string }[] = [
    { value: 2.5, suffix: '+', label: 'Years Experience', decimals: 1 },
    { value: 10, suffix: '+', label: 'Project Types', decimals: 0 },
    { text: 'Full Stack', label: 'Development' },
    { text: 'AWS', label: 'Cloud Experience' },
  ];

  const highlights = [
    { icon: Code2, title: 'MERN Stack Journey', desc: 'Started learning the MERN stack in 2022' },
    { icon: Calendar, title: 'Professional Since', desc: 'April 2024 — actively building real products' },
    { icon: MapPin, title: 'Remote Work', desc: 'Working with a Bengaluru-based service company' },
    { icon: Cloud, title: 'Cloud Exposure', desc: 'Hands-on AWS infrastructure experience' },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="About" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: introduction */}
          <div>
            <Reveal>
              <p className="text-2xl lg:text-3xl font-serif font-normal text-ink-50 leading-[1.3] mb-7">
                I'm {PROFILE.name}, a Full-Stack Developer focused on building modern web
                applications and solving real business problems through software.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink-400 leading-relaxed mb-10 text-base lg:text-lg">
                My journey began with the MERN stack, and over the past 2.5+ years I've
                grown into a developer who can own a feature end-to-end — from crafting
                responsive interfaces to designing REST APIs and deploying on AWS cloud
                infrastructure. I work remotely with a Bengaluru-based service company,
                collaborating on real-world client applications.
              </p>
            </Reveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group flex items-start gap-3.5 p-5 rounded-2xl glass-card hover:border-ink-700 hover:bg-ink-900/80 transition-all"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center group-hover:bg-lime-400/15 transition-colors">
                    <item.icon className="w-5 h-5 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink-50 mb-0.5">{item.title}</h4>
                    <p className="text-xs text-ink-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: stats card */}
          <Reveal delay={0.2} variants={fadeInUp}>
            <div className="relative p-7 lg:p-9 rounded-3xl bg-linear-to-br from-ink-900 to-ink-950 border border-ink-800 overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
              </div>
              {/* Glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-lime-400/15 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <h3 className="text-xs font-semibold text-ink-500 uppercase tracking-[0.2em]">
                    Quick Stats
                  </h3>
                  <span className="font-mono text-[10px] text-ink-600">/ portfolio.json</span>
                </div>

                <div className="grid grid-cols-2 gap-3 min-[400px]:gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="group p-4 rounded-2xl bg-ink-950/60 border border-ink-800 hover:border-lime-400/20 transition-colors min-[400px]:p-5"
                    >
                      <div className="text-2xl min-[400px]:text-3xl lg:text-4xl font-serif font-normal text-ink-50 mb-1">
                        {stat.text ? (
                          <span>{stat.text}</span>
                        ) : (
                          <Counter value={stat.value ?? 0} suffix={stat.suffix ?? ''} decimals={stat.decimals ?? 0} />
                        )}
                      </div>
                      <div className="text-xs lg:text-sm text-ink-500 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-ink-800">
                  <div className="flex items-center gap-2.5 text-sm text-ink-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
                    </span>
                    Currently building and open to new opportunities
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
