import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Sparkles,
  Terminal,
} from 'lucide-react';

import { HERO_TECHS, PROFILE } from '../data/content';
import { MagneticButton } from '../lib/animation';

function CodeEditorVisual() {
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

    rotateX.set(-y * 6);
    rotateY.set(x * 6);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

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
      {/* =====================================================
          SKILLS & TECHNOLOGIES
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.45,
        }}
        className="
          relative
          z-30
          w-full
          rounded-2xl
          border
          border-ink-700/80
          bg-ink-950/95
          p-3.5
          shadow-2xl
          shadow-black/40
          backdrop-blur-xl

          [@media(max-height:800px)]:p-3
          [@media(max-height:700px)]:p-2.5
        "
      >
        {/* Header */}
        <div className="mb-2.5 flex items-center justify-between">
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-lime-400
              "
            >
              Skills & Technologies
            </p>

            <p className="mt-0.5 text-[9px] text-ink-500">
              Full-stack development toolkit
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-lime-400/20
              bg-lime-400/5
              px-2.5
              py-1
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-wide
                text-lime-400
              "
            >
              Tech Stack
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-5">
          {HERO_TECHS.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
              key={tech.name}
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                flex
                h-8
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border
                border-ink-800
                bg-ink-900/80
                px-1.5
                transition-all
                hover:border-lime-400/40
                hover:bg-ink-800

                [@media(max-height:800px)]:h-7
                [@media(max-height:700px)]:h-6
              "
            >
                <Icon
                  className={`h-3 w-3 shrink-0 ${tech.color}`}
                />

              <span
                className="
                  truncate
                  text-[8px]
                  font-semibold
                  text-ink-200
                  sm:text-[9px]
                "
              >
                {tech.name}
              </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* =====================================================
          TERMINAL AREA
      ===================================================== */}
      <div className="relative mt-3 w-full">
        {/* Green glow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-6
            rounded-4xl
            bg-linear-to-br
            from-lime-400/12
            via-emerald-500/8
            to-transparent
            blur-3xl
          "
        />

        {/* ===================================================
            FLOATING BADGES
        =================================================== */}

        {/* ===================================================
            FLOATING TECH BADGES
        =================================================== */}
        {[
          {
            index: 0,
            position: '-left-5 top-8',
            animation: 'animate-float-slow',
            delay: 0.8,
            shadow: 'shadow-purple-500/10',
          },
          {
            index: 5,
            position: '-right-5 top-10',
            animation: 'animate-float-medium',
            delay: 0.9,
            shadow: 'shadow-green-500/10',
          },
          {
            index: 2,
            position: '-left-8 top-[48%]',
            animation: 'animate-float-fast',
            delay: 1,
            shadow: 'shadow-cyan-500/10',
          },
          {
            index: 1,
            position: '-right-7 top-[32%]',
            animation: 'animate-float-fast',
            delay: 1.05,
            shadow: 'shadow-yellow-500/10',
          },
          {
            index: 3,
            position: '-right-6 bottom-[18%]',
            animation: 'animate-float-slow',
            delay: 1.1,
            shadow: 'shadow-cyan-500/10',
          },
        ].map((badge) => {
          const tech = HERO_TECHS[badge.index];

          if (!tech) return null;

          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: badge.delay, type: 'spring' }}
              className={`
                absolute
                z-30
                ${badge.position}
                ${badge.animation}
                hidden
                sm:block
              `}
              style={{ transform: 'translateZ(50px)' }}
            >
              <div
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-ink-700
                  bg-ink-900/95
                  px-3
                  py-2
                  shadow-xl
                  backdrop-blur-md
                  ${badge.shadow}
                `}
              >
                <Icon className={`h-4 w-4 ${tech.color}`} />

                <span className="whitespace-nowrap text-[10px] font-semibold text-ink-100">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* ===================================================
            EXPERIENCE TERMINAL
        =================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-ink-700
            bg-ink-950
            shadow-2xl
            shadow-black/50
          "
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          {/* Terminal Header */}
          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-ink-800
              bg-ink-900/90
              px-4
              py-2.5
            "
          >
            <div className="flex shrink-0 gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            <div
              className="
                flex
                h-6
                flex-1
                items-center
                rounded-md
                border
                border-ink-700
                bg-ink-950
                px-3
              "
            >
              <span className="truncate text-[9px] font-mono text-ink-500">
                ~/portfolio/experience.json
              </span>
            </div>

            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />

              <span className="text-[8px] font-mono text-ink-500">
                ONLINE
              </span>
            </div>
          </div>

          {/* Terminal Tabs */}
          <div
            className="
              flex
              items-center
              border-b
              border-ink-800
              bg-ink-900/60
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                border-r
                border-ink-800
                bg-ink-800/40
                px-4
                py-2
              "
            >
              <Terminal className="h-3.5 w-3.5 text-lime-400" />

              <span className="text-[9px] font-medium text-ink-200">
                Terminal
              </span>
            </div>

            <div
              className="
                hidden
                items-center
                gap-2
                border-r
                border-ink-800
                px-4
                py-2
                sm:flex
              "
            >
              <BriefcaseBusiness className="h-3 w-3 text-ink-600" />

              <span className="text-[9px] text-ink-500">
                experience.json
              </span>
            </div>

            <div className="ml-auto px-3">
              <span
                className="
                  rounded-md
                  border
                  border-ink-700
                  bg-ink-950
                  px-2
                  py-1
                  text-[7px]
                  font-mono
                  text-ink-500
                "
              >
                JSON
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            className="
              bg-ink-950
              px-5
              py-4
              font-mono
              text-[10px]
              leading-[1.75]

              sm:min-h-75
              sm:px-6
              sm:py-5
              sm:text-[11px]

              [@media(max-height:800px)]:sm:min-h-67.5
              [@media(max-height:700px)]:sm:min-h-61.25
              [@media(max-height:800px)]:py-3
            "
          >
            {/* Command */}
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-lime-400">
                ajhar@portfolio
              </span>

              <span className="text-ink-600">
                :~$
              </span>

              <span className="text-ink-200">
                cat experience.json
              </span>
            </div>

            {/* JSON */}
            <div className="space-y-0.5">
              <div className="text-ink-500">
                {'{'}
              </div>

              {/* Role */}
              <div className="pl-4 sm:pl-6">
                <span className="text-purple-400">
                  "role"
                </span>

                <span className="text-ink-500">
                  :{' '}
                </span>

                <span className="text-yellow-300">
                  "Remote Full Stack Developer"
                </span>

                <span className="text-ink-500">
                  ,
                </span>
              </div>

              {/* Company */}
              <div className="pl-4 sm:pl-6">
                <span className="text-purple-400">
                  "company"
                </span>

                <span className="text-ink-500">
                  :{' '}
                </span>

                <span className="text-lime-400">
                  "CodeSunset"
                </span>

                <span className="text-ink-500">
                  ,
                </span>
              </div>

              {/* Joining Date */}
              <div className="pl-4 sm:pl-6">
                <span className="text-purple-400">
                  "joiningDate"
                </span>

                <span className="text-ink-500">
                  :{' '}
                </span>

                <span className="text-cyan-300">
                  "08 April 2024"
                </span>

                <span className="text-ink-500">
                  ,
                </span>
              </div>

              {/* Location */}
              <div className="pl-4 sm:pl-6">
                <span className="text-purple-400">
                  "location"
                </span>

                <span className="text-ink-500">
                  :{' '}
                </span>

                <span className="text-orange-300">
                  "Bengaluru, Electronic City Phase 1"
                </span>

                <span className="text-ink-500">
                  ,
                </span>
              </div>

              {/* Job Type */}
              <div className="pl-4 sm:pl-6">
                <span className="text-purple-400">
                  "jobType"
                </span>

                <span className="text-ink-500">
                  :{' '}
                </span>

                <span className="text-green-300">
                  "Remote"
                </span>
              </div>

              <div className="text-ink-500">
                {'}'}
              </div>
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-ink-900" />

            {/* Status */}
            <div className="space-y-1 text-[9px] sm:text-[10px]">
              <div className="flex items-center gap-2">
                <span className="text-lime-400">
                  ✓
                </span>

                <span className="text-ink-400">
                  Experience loaded successfully
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lime-400">
                  ✓
                </span>

                <span className="text-ink-400">
                  Full-stack development environment ready
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lime-400">
                  ✓
                </span>

                <span className="text-ink-400">
                  Building scalable web applications
                </span>
              </div>
            </div>

            {/* Cursor */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lime-400">
                ajhar@portfolio
              </span>

              <span className="text-ink-600">
                :~$
              </span>

              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                className="inline-block h-3.5 w-1.5 bg-lime-400"
              />
            </div>
          </div>

          {/* Terminal Footer */}
          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-ink-800
              bg-ink-900/80
              px-4
              py-2
            "
          >
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-mono text-ink-600">
                ~/portfolio
              </span>

              <span
                className="
                  hidden
                  text-[8px]
                  font-mono
                  text-ink-600
                  sm:block
                "
              >
                main
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[8px] font-mono text-ink-600">
                UTF-8
              </span>

              <span className="text-[8px] font-mono text-lime-400">
                READY
              </span>
            </div>
          </div>
        </motion.div>
      </div>
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
              RIGHT VISUAL
          ================================================= */}

          <div className="relative mt-4 w-full sm:mt-6 lg:mt-0">
            <CodeEditorVisual />
          </div>
        </div>
      </div>
    </section>
  );
}