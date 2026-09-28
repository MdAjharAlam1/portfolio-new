import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Star,
  CheckCircle2,
  Server,
  Layers,
  Sparkles,
  X,
  Code2,
  Database,
  Globe,
  Boxes,
} from 'lucide-react';
import { PROJECTS, type Project } from '../data/content';
import { staggerContainer, fadeInUp, SectionHeader } from '../lib/animation';

function ProjectMockup({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  // If project has an image and it hasn't errored out, show the real image in macOS glass browser frame
  if (project.image && !imageError) {
    return (
      <div className="relative w-full h-full flex flex-col bg-ink-950 overflow-hidden group/frame">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink-800/80 bg-ink-900/90 backdrop-blur-md z-10 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 ml-2 flex items-center gap-1.5 h-4.5 rounded-md bg-ink-950/80 border border-ink-700/60 px-2">
            <Globe className="w-2.5 h-2.5 text-lime-400 shrink-0" />
            <span className="text-[9px] font-mono text-ink-300 truncate">
              https://{project.domain}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-[8px] font-mono text-lime-400 font-semibold uppercase">
              LIVE
            </span>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 w-full overflow-hidden bg-ink-950">
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/frame:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  // High-fidelity fallback SaaS mockups based on category
  if (project.mockup === 'inventory') {
    return (
      <div className="w-full h-full p-3 sm:p-4 bg-ink-950 flex flex-col gap-2 font-mono text-[9px] select-none">
        <div className="flex items-center justify-between border-b border-ink-800 pb-2">
          <div className="flex items-center gap-1.5 text-lime-400 font-bold">
            <Boxes className="w-3.5 h-3.5" />
            <span>Inventory & Stock Monitor</span>
          </div>
          <span className="text-ink-400 text-[8px]">Warehouse A & B</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div className="p-2 rounded-lg bg-ink-900/80 border border-ink-800">
            <p className="text-ink-400 text-[8px]">Total SKUs</p>
            <p className="text-sm font-bold text-ink-100 mt-0.5">2,480</p>
            <span className="text-[7px] text-lime-400">+12% this mo</span>
          </div>
          <div className="p-2 rounded-lg bg-ink-900/80 border border-ink-800">
            <p className="text-ink-400 text-[8px]">In Stock</p>
            <p className="text-sm font-bold text-cyan-400 mt-0.5">94.2%</p>
            <span className="text-[7px] text-ink-400">Optimal</span>
          </div>
          <div className="p-2 rounded-lg bg-ink-900/80 border border-ink-800">
            <p className="text-ink-400 text-[8px]">Low Stock</p>
            <p className="text-sm font-bold text-amber-400 mt-0.5">14 items</p>
            <span className="text-[7px] text-amber-400">Reorder Req</span>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-ink-900/60 border border-ink-800 p-2 space-y-1.5 mt-1 overflow-hidden">
          <div className="flex justify-between text-ink-400 text-[8px] border-b border-ink-800/80 pb-1">
            <span>ITEM NAME</span>
            <span>STOCK</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between text-ink-200">
            <span>MacBook M3 Pro</span>
            <span className="text-lime-400">42 units</span>
            <span className="text-emerald-400">✓ Ready</span>
          </div>
          <div className="flex justify-between text-ink-200">
            <span>UltraFine 4K Monitor</span>
            <span className="text-yellow-400">6 units</span>
            <span className="text-amber-400">⚡ Low</span>
          </div>
          <div className="flex justify-between text-ink-200">
            <span>Mechanical Keyboard</span>
            <span className="text-lime-400">128 units</span>
            <span className="text-emerald-400">✓ Ready</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.mockup === 'project') {
    return (
      <div className="w-full h-full p-3 sm:p-4 bg-ink-950 flex flex-col gap-2 font-mono text-[9px] select-none">
        <div className="flex items-center justify-between border-b border-ink-800 pb-2">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>Sprint Kanban Board</span>
          </div>
          <span className="text-lime-400 text-[8px]">Sprint 14 Active</span>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1 mt-1">
          {/* Column 1 */}
          <div className="rounded-lg bg-ink-900/70 border border-ink-800 p-2 flex flex-col gap-1.5">
            <span className="text-[8px] font-bold text-ink-400 uppercase">To Do (3)</span>
            <div className="p-1.5 rounded bg-ink-950 border border-ink-800 text-[8px] text-ink-200">
              API Auth Gateway
              <span className="block mt-1 text-[7px] text-purple-400 font-sans font-semibold">● High</span>
            </div>
            <div className="p-1.5 rounded bg-ink-950 border border-ink-800 text-[8px] text-ink-200">
              Database Migration
              <span className="block mt-1 text-[7px] text-cyan-400 font-sans font-semibold">● Medium</span>
            </div>
          </div>
          {/* Column 2 */}
          <div className="rounded-lg bg-ink-900/70 border border-lime-400/20 p-2 flex flex-col gap-1.5">
            <span className="text-[8px] font-bold text-lime-400 uppercase">In Progress (2)</span>
            <div className="p-1.5 rounded bg-ink-950 border border-lime-400/30 text-[8px] text-ink-100 shadow-sm">
              Kanban Drag & Drop
              <div className="w-full bg-ink-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-lime-400 h-full w-3/4" />
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="rounded-lg bg-ink-900/70 border border-ink-800 p-2 flex flex-col gap-1.5">
            <span className="text-[8px] font-bold text-emerald-400 uppercase">Done (8)</span>
            <div className="p-1.5 rounded bg-ink-950/80 border border-ink-800/80 text-[8px] text-ink-400 line-through">
              User Profile Schema
            </div>
            <div className="p-1.5 rounded bg-ink-950/80 border border-ink-800/80 text-[8px] text-ink-400 line-through">
              Milestone Timeline
            </div>
          </div>
        </div>
      </div>
    );
  }

  // School ERP Mockup
  return (
    <div className="w-full h-full p-3 sm:p-4 bg-ink-950 flex flex-col gap-2 font-mono text-[9px] select-none">
      <div className="flex items-center justify-between border-b border-ink-800 pb-2">
        <div className="flex items-center gap-1.5 text-amber-400 font-bold">
          <Globe className="w-3.5 h-3.5" />
          <span>TS Campus ERP Portal</span>
        </div>
        <span className="text-lime-400 text-[8px]">Academic Year 2024-25</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-1">
        <div className="p-2 rounded-lg bg-ink-900/80 border border-ink-800">
          <p className="text-ink-400 text-[8px]">Students</p>
          <p className="text-sm font-bold text-ink-100 mt-0.5">1,850</p>
          <span className="text-[7px] text-lime-400">98% Active</span>
        </div>
        <div className="p-2 rounded-lg bg-ink-900/80 border border-ink-800">
          <p className="text-ink-400 text-[8px]">Today Attendance</p>
          <p className="text-sm font-bold text-emerald-400 mt-0.5">96.4%</p>
          <span className="text-[7px] text-ink-400">Classes 1-12</span>
        </div>
        <div className="p-2 rounded-lg bg-ink-900/80 border border-ink-800">
          <p className="text-ink-400 text-[8px]">Fee Collection</p>
          <p className="text-sm font-bold text-cyan-400 mt-0.5">₹48.2L</p>
          <span className="text-[7px] text-lime-400">Q3 Reconciled</span>
        </div>
      </div>
      <div className="flex-1 rounded-lg bg-ink-900/60 border border-ink-800 p-2 space-y-1 mt-1 overflow-hidden">
        <div className="flex justify-between text-ink-400 text-[8px] border-b border-ink-800/80 pb-1">
          <span>MODULE</span>
          <span>RECORDS</span>
          <span>STATUS</span>
        </div>
        <div className="flex justify-between text-ink-200">
          <span>Admissions 2024</span>
          <span className="text-ink-400">320 Applicants</span>
          <span className="text-emerald-400">✓ Enrolled</span>
        </div>
        <div className="flex justify-between text-ink-200">
          <span>Exam Term 1 Results</span>
          <span className="text-ink-400">54 Classes</span>
          <span className="text-lime-400">✓ Published</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: (project: Project) => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative rounded-3xl bg-ink-900/70 border border-ink-800/90 overflow-hidden hover:border-lime-400/40 hover:shadow-2xl hover:shadow-lime-400/5 transition-all duration-400 flex flex-col ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Mockup / Image area */}
      <div
        className={`relative overflow-hidden ${
          project.featured ? 'h-64 sm:h-72 lg:h-80' : 'h-52 sm:h-60'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 to-ink-950" />
        <div className="absolute inset-2 sm:inset-3 rounded-2xl overflow-hidden border border-ink-700/60 shadow-xl bg-ink-950">
          <ProjectMockup project={project} />
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400 text-ink-950 font-bold text-xs shadow-lg shadow-lime-400/30 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-ink-950" />
            <span>Featured Project</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Domain & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-2.5 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              {project.domain}
            </span>
            <span className="text-xs font-medium text-ink-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink-50 mb-2 group-hover:text-lime-300 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-ink-300 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium text-ink-300 bg-ink-950/80 border border-ink-800 rounded-lg hover:border-lime-400/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-ink-800/80">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-lime-400 hover:text-lime-300 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>What I Worked On</span>
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-ink-300 hover:text-ink-50 transition-colors"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<'all' | 'frontend' | 'backend'>('all');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl border border-ink-700 bg-ink-950 p-6 sm:p-8 shadow-2xl shadow-black z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-ink-900 border border-ink-800 text-ink-400 hover:text-ink-100 hover:bg-ink-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-3 py-1 rounded-full">
                {project.domain}
              </span>
              <span className="text-xs font-medium text-ink-400">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink-50">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-ink-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold text-lime-300 bg-lime-400/5 border border-lime-400/20 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tab Filters */}
          <div className="flex items-center gap-2 mb-5 border-b border-ink-800 pb-3">
            <button
              onClick={() => setTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                tab === 'all'
                  ? 'bg-lime-400 text-ink-950 shadow-md shadow-lime-400/20'
                  : 'bg-ink-900 text-ink-400 hover:text-ink-200 border border-ink-800'
              }`}
            >
              All Contributions ({project.work.frontend.length + project.work.backend.length})
            </button>
            <button
              onClick={() => setTab('frontend')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                tab === 'frontend'
                  ? 'bg-cyan-400 text-ink-950 shadow-md shadow-cyan-400/20'
                  : 'bg-ink-900 text-ink-400 hover:text-ink-200 border border-ink-800'
              }`}
            >
              Frontend (React / Next.js)
            </button>
            <button
              onClick={() => setTab('backend')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                tab === 'backend'
                  ? 'bg-emerald-400 text-ink-950 shadow-md shadow-emerald-400/20'
                  : 'bg-ink-900 text-ink-400 hover:text-ink-200 border border-ink-800'
              }`}
            >
              Backend (Node / Express / MongoDB)
            </button>
          </div>

          {/* Work Breakdown Columns */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Frontend Column */}
            {(tab === 'all' || tab === 'frontend') && (
              <div
                className={`rounded-2xl bg-ink-900/80 border border-ink-800 p-5 ${
                  tab === 'frontend' ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-cyan-400 mb-4 pb-2 border-b border-ink-800">
                  <Code2 className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-sm uppercase tracking-wide">
                    Frontend Architecture (React / Next.js)
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {project.work.frontend.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Backend Column */}
            {(tab === 'all' || tab === 'backend') && (
              <div
                className={`rounded-2xl bg-ink-900/80 border border-ink-800 p-5 ${
                  tab === 'backend' ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-emerald-400 mb-4 pb-2 border-b border-ink-800">
                  <Server className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-sm uppercase tracking-wide">
                    Backend & APIs (Node.js / MongoDB)
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {project.work.backend.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-200 leading-relaxed">
                      <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink-800">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-2.5 text-xs sm:text-sm font-bold text-ink-950 shadow-lg shadow-lime-400/20 hover:bg-lime-300 transition-colors"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div />
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-ink-700 bg-ink-900 text-xs sm:text-sm font-semibold text-ink-200 hover:bg-ink-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-ink-900/30 border-y border-ink-800">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Production Projects"
          title="Full-Stack Applications"
          subtitle="Real-world enterprise SaaS and management platforms built with React, Next.js, Node.js, Express & MongoDB."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.domain}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </motion.div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
