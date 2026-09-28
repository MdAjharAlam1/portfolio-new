import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { PROJECTS, type Project } from '../data/content';
import { staggerContainer, fadeInUp, SectionHeader } from '../lib/animation';

function ProjectMockup({ type, title }: { type: Project['mockup']; title: string }) {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-full p-3 bg-ink-900 flex flex-col gap-2">
        <div className="flex gap-1.5 mb-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-1/5 space-y-1">
            <div className="h-2 rounded bg-lime-400/40" />
            <div className="h-2 rounded bg-ink-700" />
            <div className="h-2 rounded bg-ink-700" />
            <div className="h-2 rounded bg-ink-700" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded bg-lime-400/10 border border-lime-400/20" />
              <div className="h-8 rounded bg-ink-800 border border-ink-700" />
              <div className="h-8 rounded bg-emerald-400/10 border border-emerald-400/20" />
            </div>
            <div className="h-12 rounded bg-ink-950 border border-ink-800 flex items-end p-1 gap-0.5">
              {[40, 65, 30, 80, 55, 90, 45, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-lime-500/60 to-emerald-400/60" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    return (
      <div className="w-full h-full p-3 bg-ink-950 font-mono text-[8px] sm:text-[9px] text-ink-300 space-y-1 overflow-hidden">
        <div className="text-lime-400">$ npm run build</div>
        <div className="text-ink-600">{'>'} Building production bundle...</div>
        <div className="text-ink-400">✓ Compiled successfully</div>
        <div className="text-ink-400">✓ Type checking passed</div>
        <div className="text-ink-400">✓ Bundled 1,247 modules</div>
        <div className="text-cyan-400">→ Output: dist/ (482 KB)</div>
        <div className="text-lime-400">$ npm run deploy</div>
        <div className="text-ink-600">{'>'} Deploying to AWS S3...</div>
        <div className="text-yellow-400">→ Uploading files [████████░░] 80%</div>
        <div className="text-lime-400">✓ Deployed to production</div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950">
        <div className="w-20 h-32 rounded-xl bg-ink-900 border border-ink-700 shadow-lg overflow-hidden flex flex-col">
          <div className="h-3 bg-ink-950 flex items-center justify-center">
            <div className="w-6 h-1 rounded-full bg-ink-700" />
          </div>
          <div className="flex-1 p-1.5 space-y-1">
            <div className="h-2 rounded bg-lime-400/40" />
            <div className="h-8 rounded bg-ink-800" />
            <div className="h-2 rounded bg-ink-700 w-2/3" />
            <div className="h-6 rounded bg-lime-400/20 border border-lime-400/20" />
            <div className="h-6 rounded bg-ink-800" />
          </div>
        </div>
      </div>
    );
  }

  // browser
  return (
    <div className="w-full h-full flex flex-col bg-ink-900">
      <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-ink-800 bg-ink-800/50">
        <div className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
        <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
        <div className="flex-1 ml-1.5 h-3 rounded bg-ink-950 border border-ink-700 flex items-center px-1.5">
          <span className="text-[6px] font-mono text-ink-600 truncate">{title.toLowerCase().replace(/\s/g, '')}.com</span>
        </div>
      </div>
      <div className="flex-1 p-2.5 bg-ink-950 flex flex-col gap-1.5">
        <div className="h-3 rounded bg-ink-100 w-1/3" />
        <div className="h-2 rounded bg-ink-700 w-2/3" />
        <div className="grid grid-cols-3 gap-1.5 mt-1 flex-1">
          <div className="rounded bg-gradient-to-br from-lime-400/15 to-emerald-400/10 border border-lime-400/15" />
          <div className="rounded bg-ink-800 border border-ink-700" />
          <div className="rounded bg-gradient-to-br from-ink-800 to-ink-700 border border-ink-700" />
        </div>
        <div className="h-4 rounded bg-lime-400 w-20 mt-auto" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative rounded-3xl bg-ink-900/60 border border-ink-800 overflow-hidden hover:border-ink-700 hover:shadow-2xl hover:shadow-black/40 transition-all duration-400 ${project.featured ? 'lg:col-span-2' : ''
        }`}
    >
      {/* Mockup area */}
      <div className={`relative overflow-hidden ${project.featured ? 'h-60 lg:h-72' : 'h-48'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-900" />
        <div className="absolute inset-3 rounded-xl overflow-hidden border border-ink-700/50 shadow-lg">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            <ProjectMockup type={project.mockup} title={project.title} />
          </div>
        </div>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-lime-400/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {project.featured && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 backdrop-blur-sm">
            <Star className="w-3 h-3 text-lime-400 fill-lime-400" />
            <span className="text-[10px] font-semibold text-lime-400">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-medium text-lime-400 uppercase tracking-wider mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-serif font-normal text-ink-50 mb-2">{project.title}</h3>
        <p className="text-sm text-ink-400 leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium text-ink-300 bg-ink-950/60 border border-ink-800 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-ink-100 hover:text-lime-400 transition-colors">
            View Project
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-ink-900/30 border-y border-ink-800">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A selection of real-world applications I've built — from e-commerce to healthcare platforms."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
