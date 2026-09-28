import { useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowRight,
  Download,
  Sparkles,
  CheckCircle2,
  Atom,
  Hexagon,
  Server,
  Database,
  Cloud,
  Code2,
  Layers,
  Container,
  DatabaseZap,
  Radio,
  Workflow,
  ListChecks,
  BrainCircuit,
  Braces,
  Wind,
  GitBranch,
  Cpu,
} from 'lucide-react';

import { PROFILE } from '../data/content';
import { MagneticButton } from '../lib/animation';

const HERO_SKILLS = [
  { name: 'React', category: 'Frontend', icon: Atom, color: 'text-cyan-400', badge: 'v19 / SPA' },
  { name: 'Next.js', category: 'Frontend', icon: Hexagon, color: 'text-ink-100', badge: 'App Router' },
  { name: 'TypeScript', category: 'Frontend', icon: Code2, color: 'text-blue-400', badge: 'Type Safety' },
  { name: 'JavaScript', category: 'Frontend', icon: Braces, color: 'text-yellow-400', badge: 'ES6+ / Modern' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Wind, color: 'text-sky-400', badge: 'Styling' },
  { name: 'Node.js', category: 'Backend', icon: Server, color: 'text-green-400', badge: 'Runtime' },
  { name: 'Express.js', category: 'Backend', icon: Cpu, color: 'text-ink-200', badge: 'REST APIs' },
  { name: 'Gen AI', category: 'AI & Cloud', icon: BrainCircuit, color: 'text-purple-400', badge: 'LLMs & Agents' },
  { name: 'MongoDB', category: 'Database', icon: Database, color: 'text-emerald-400', badge: 'NoSQL' },
  { name: 'PostgreSQL', category: 'Database', icon: Database, color: 'text-blue-400', badge: 'Relational' },
  { name: 'Prisma ORM', category: 'Database', icon: Layers, color: 'text-indigo-400', badge: 'Schema & Query' },
  { name: 'Redis', category: 'Database', icon: DatabaseZap, color: 'text-red-400', badge: 'Cache / PubSub' },
  { name: 'AWS Cloud', category: 'AI & Cloud', icon: Cloud, color: 'text-orange-400', badge: 'Cloud Infra' },
  { name: 'Docker', category: 'AI & Cloud', icon: Container, color: 'text-blue-400', badge: 'Containers' },
  { name: 'CI/CD', category: 'AI & Cloud', icon: GitBranch, color: 'text-orange-400', badge: 'Pipelines' },
  { name: 'Kafka', category: 'Backend', icon: Radio, color: 'text-amber-300', badge: 'Event Stream' },
  { name: 'RabbitMQ', category: 'Backend', icon: Workflow, color: 'text-orange-300', badge: 'Message Queue' },
  { name: 'BullMQ', category: 'Backend', icon: ListChecks, color: 'text-rose-400', badge: 'Job Processing' },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'AI & Cloud'] as const;

function HeroSkillsVisual() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRX = useSpring(rotateX, {
    damping: 30,
    stiffness: 200,
  });

  const smoothRY = useSpring(rotateY, {
    damping: 30,
    stiffness: 200,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-y * 5);
    rotateY.set(x * 5);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const filteredSkills = activeCategory === 'All'
    ? HERO_SKILLS
    : HERO_SKILLS.filter((s) => s.category === activeCategory);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        rotateX: smoothRX,
        rotateY: smoothRY,
        transformStyle: 'preserve-3d',
      }}
      className="
        relative
        perspective-1000
        flex
        w-full
        flex-col
        items-center
      "
    >
      {/* Ambient background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-3xl
          bg-linear-to-br
          from-lime-400/15
          via-emerald-500/10
          to-transparent
          blur-2xl
        "
      />

      {/* ===================================================
          FLOATING TECH BADGES
      =================================================== */}
      {[
        {
          name: 'React.js',
          icon: Atom,
          color: 'text-cyan-400',
          position: '-left-4 -top-3',
          animation: 'animate-float-slow',
          delay: 0.6,
          shadow: 'shadow-cyan-500/15',
        },
        {
          name: 'Next.js',
          icon: Hexagon,
          color: 'text-ink-100',
          position: '-right-4 -top-2',
          animation: 'animate-float-medium',
          delay: 0.7,
          shadow: 'shadow-white/10',
        },
        {
          name: 'Node.js',
          icon: Server,
          color: 'text-green-400',
          position: '-left-6 top-1/2 -translate-y-1/2',
          animation: 'animate-float-fast',
          delay: 0.8,
          shadow: 'shadow-green-500/15',
        },
        {
          name: 'Gen AI',
          icon: BrainCircuit,
          color: 'text-purple-400',
          position: '-right-6 top-1/2 -translate-y-1/2',
          animation: 'animate-float-slow',
          delay: 0.9,
          shadow: 'shadow-purple-500/15',
        },
        {
          name: 'AWS Cloud',
          icon: Cloud,
          color: 'text-orange-400',
          position: '-left-3 -bottom-3',
          animation: 'animate-float-medium',
          delay: 1.0,
          shadow: 'shadow-orange-500/15',
        },
        {
          name: 'PostgreSQL',
          icon: Database,
          color: 'text-blue-400',
          position: '-right-3 -bottom-3',
          animation: 'animate-float-fast',
          delay: 1.05,
          shadow: 'shadow-blue-500/15',
        },
      ].map((badge) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay, type: 'spring' }}
            className={`
              absolute
              z-30
              ${badge.position}
              ${badge.animation}
              hidden
              xl:block
            `}
            style={{ transform: 'translateZ(40px)' }}
          >
            <div
              className={`
                flex
                items-center
                gap-2.5
                rounded-xl
                border
                border-ink-700/80
                bg-ink-900/90
                px-3.5
                py-2
                shadow-lg
                backdrop-blur-md
                ${badge.shadow}
              `}
            >
              <Icon className={`h-4.5 w-4.5 shrink-0 ${badge.color}`} />
              <span className="whitespace-nowrap text-xs font-semibold text-ink-100">
                {badge.name}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* =====================================================
          MAIN SKILLS SHOWCASE CARD
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-20
          w-full
          rounded-2xl
          border
          border-ink-700/80
          bg-ink-950/95
          p-4
          sm:p-5
          shadow-2xl
          shadow-black/60
          backdrop-blur-xl
        "
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-ink-800/80 pb-3.5">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-lime-400" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-400">
                Technical Stack & Skills
              </p>
            </div>
            <h3 className="mt-0.5 text-sm sm:text-base font-bold text-ink-50">
              Core Technologies & Tools
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">
              18+ Skills
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-lg
                  px-2.5
                  py-1.5
                  text-xs
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? 'bg-lime-400 text-ink-950 font-semibold shadow-md shadow-lime-400/20'
                      : 'border border-ink-800 bg-ink-900/80 text-ink-400 hover:border-ink-700 hover:bg-ink-800 hover:text-ink-100'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="
            grid
            grid-cols-2
            gap-2.5
            sm:grid-cols-3
            max-h-72
            sm:max-h-80
            overflow-y-auto
            pr-1
            scrollbar-hide
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -2 }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-ink-800/90
                    bg-ink-900/70
                    p-2.5
                    sm:p-3
                    transition-all
                    duration-200
                    hover:border-lime-400/40
                    hover:bg-ink-900
                    hover:shadow-lg
                    hover:shadow-lime-400/5
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      sm:h-10
                      sm:w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-ink-800
                      bg-ink-950/90
                      transition-transform
                      duration-200
                      group-hover:scale-110
                      group-hover:border-lime-400/30
                    "
                  >
                    <Icon className={`h-5 w-5 ${skill.color}`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs sm:text-sm font-semibold text-ink-100 transition-colors group-hover:text-lime-300">
                      {skill.name}
                    </p>
                    <p className="truncate text-[10px] sm:text-[11px] font-normal text-ink-400">
                      {skill.badge}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer info bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ink-800/80 pt-3 text-xs">
          <div className="flex items-center gap-1.5 text-ink-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-lime-400" />
            <span className="text-[11px] sm:text-xs font-medium">
              Full-Stack Architecture & Clean Code
            </span>
          </div>

          <span className="rounded-md border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-lime-400">
            Production Ready
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const scrollTo = (id: string) => {
    document
      .querySelector(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouse}
      className="
        relative
        flex
        min-h-svh
        items-center
        overflow-hidden
        pt-24
        pb-10

        sm:pt-28
        sm:pb-12

        lg:h-svh
        lg:min-h-155
        lg:pt-24
        lg:pb-6

        [@media(max-height:800px)]:lg:min-h-0
        [@media(max-height:800px)]:lg:pt-20
        [@media(max-height:800px)]:lg:pb-4
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 grid-bg opacity-80" />

      <div className="absolute inset-0 noise-bg" />

      <div
        className="
          absolute
          top-10
          -left-20
          h-125
          w-125
          rounded-full
          bg-linear-to-br
          from-lime-500/10
          to-emerald-500/8
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-10
          h-112.5
          w-112.5
          rounded-full
          bg-linear-to-tl
          from-emerald-500/8
          to-lime-400/8
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          left-0
          h-32
          bg-linear-to-b
          from-ink-950
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          items-center
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-start
            gap-6
            sm:gap-8
            lg:grid-cols-2
            lg:items-center
            lg:gap-8

            [@media(max-height:800px)]:lg:gap-5
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="text-center sm:text-left lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-ink-800
                bg-ink-900/60
                px-3.5
                py-1.5
                backdrop-blur-sm
                sm:mb-6
                sm:px-4
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-lime-400" />

              <span className="text-xs font-semibold uppercase tracking-wide text-ink-200">
                {PROFILE.name} • Full-Stack Developer
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="
                mb-4
                text-4xl
                font-serif
                font-normal
                leading-[0.95]
                tracking-tight
                sm:mb-5
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[5.2rem]

                [@media(max-height:800px)]:lg:text-6xl
                [@media(max-height:700px)]:lg:text-[3.7rem]
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="block text-ink-50"
              >
                Fullstack
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="block text-ink-50"
              >
                Developer
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="
                  block
                  text-gradient
                  bg-[length:200%_auto]
                  italic
                  animate-gradient-shift
                "
              >
                2.5 years of experience
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="
                mx-auto
                mb-6
                max-w-xl
                text-sm
                leading-relaxed
                text-ink-400
                sm:mb-7
                sm:text-base
                lg:mx-0
                lg:text-lg

                [@media(max-height:800px)]:lg:mb-5
                [@media(max-height:700px)]:lg:text-base
              "
            >
              I build scalable, responsive and user-focused web applications
              using modern JavaScript technologies, backend APIs and cloud
              infrastructure.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.95,
              }}
              className="
                mb-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
                sm:mb-6
                sm:gap-4
                lg:justify-start

                [@media(max-height:800px)]:lg:mb-4
                [@media(max-height:800px)]:lg:gap-3
              "
            >
              {/* View Work */}
              <MagneticButton
                href="#projects"
                onClick={() => scrollTo('#projects')}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-lime-400
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-ink-950
                  shadow-lg
                  shadow-lime-400/20
                  transition-colors
                  hover:bg-lime-300
                "
              >
                View My Work

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </MagneticButton>

              {/* Resume */}
              <MagneticButton
                href="/resume.pdf"
                download="Md-Ajhar-Alam-Resume.pdf"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-ink-700
                  bg-ink-900/60
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-ink-100
                  backdrop-blur-sm
                  transition-all
                  hover:border-ink-600
                  hover:bg-ink-800/60
                "
              >
                <Download className="h-4 w-4" />

                Download Resume
              </MagneticButton>
            </motion.div>

            {/* Contact CTA */}
            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.95,
              }}
              onClick={() => scrollTo('#contact')}
              className="
                group
                inline-flex
                items-center
                gap-1.5
                text-sm
                font-medium
                text-ink-500
                transition-colors
                hover:text-lime-400
              "
            >
              Let's build something together

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>

          {/* =================================================
              RIGHT VISUAL: SKILLS SHOWCASE
          ================================================= */}

          <div className="relative mt-4 w-full sm:mt-6 lg:mt-0">
            <HeroSkillsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}