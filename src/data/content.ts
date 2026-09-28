import {
  Atom, Hexagon, Server, Database, Cloud, Code2,
  Layout, Boxes, CloudUpload, BrainCircuit, Braces, Wind, Route,
  Container, DatabaseZap, Radio, Workflow, ListChecks, BookOpen,
  Briefcase, Target, Layers, Zap, GraduationCap,
  GitBranch, Terminal, Cpu, Globe,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export interface TechBadge {
  name: string;
  icon: LucideIcon;
  color: string;
  glow: string;
}

export const HERO_TECHS: TechBadge[] = [
  { name: 'Gen AI', icon: BrainCircuit, color: 'text-purple-400', glow: 'shadow-purple-500/20' },
  { name: 'JavaScript', icon: Braces, color: 'text-yellow-400', glow: 'shadow-yellow-500/20' },
  { name: 'React', icon: Atom, color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  { name: 'Tailwind CSS', icon: Wind, color: 'text-sky-400', glow: 'shadow-sky-500/20' },
  { name: 'Next.js', icon: Hexagon, color: 'text-ink-100', glow: 'shadow-ink-400/20' },
  { name: 'Node.js', icon: Server, color: 'text-green-400', glow: 'shadow-green-500/20' },
  { name: 'Express.js', icon: Route, color: 'text-gray-300', glow: 'shadow-gray-400/20' },
  { name: 'CI/CD', icon: GitBranch, color: 'text-orange-400', glow: 'shadow-orange-500/20' },
  { name: 'MongoDB', icon: Database, color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-400', glow: 'shadow-blue-500/20' },
  { name: 'Prisma ORM', icon: Boxes, color: 'text-indigo-400', glow: 'shadow-indigo-500/20' },
  { name: 'Docker', icon: Container, color: 'text-blue-400', glow: 'shadow-blue-500/20' },
  { name: 'AWS Cloud', icon: Cloud, color: 'text-orange-400', glow: 'shadow-orange-500/20' },
  { name: 'Redis', icon: DatabaseZap, color: 'text-red-400', glow: 'shadow-red-500/20' },
  { name: 'Kafka', icon: Radio, color: 'text-gray-200', glow: 'shadow-gray-400/20' },
  { name: 'RabbitMQ', icon: Workflow, color: 'text-orange-300', glow: 'shadow-orange-400/20' },
  { name: 'BullMQ', icon: ListChecks, color: 'text-red-300', glow: 'shadow-red-400/20' },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', icon: Atom, description: 'Component-driven UI architecture', color: 'text-cyan-400' },
      { name: 'Next.js', icon: Hexagon, description: 'SSR / SSG / App Router', color: 'text-ink-100' },
      { name: 'TypeScript', icon: Code2, description: 'Type-safe development', color: 'text-blue-400' },
      { name: 'JavaScript', icon: Terminal, description: 'ES2020+ modern syntax', color: 'text-yellow-400' },
      { name: 'HTML5', icon: Globe, description: 'Semantic accessible markup', color: 'text-orange-400' },
      { name: 'CSS3', icon: Layers, description: 'Flexbox / Grid / animations', color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: Boxes, description: 'Utility-first styling', color: 'text-cyan-300' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server, description: 'Server-side JavaScript runtime', color: 'text-green-400' },
      { name: 'Express.js', icon: Cpu, description: 'Minimal web framework', color: 'text-ink-200' },
      { name: 'REST APIs', icon: GitBranch, description: 'API design and integration', color: 'text-blue-400' },
      { name: 'MongoDB', icon: Database, description: 'NoSQL document database', color: 'text-emerald-400' },
      { name: 'Mongoose', icon: Database, description: 'ODM for MongoDB', color: 'text-red-400' },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: Cloud, description: 'Cloud infrastructure', color: 'text-orange-400' },
      { name: 'EC2', icon: Server, description: 'Virtual server instances', color: 'text-orange-300' },
      { name: 'S3', icon: Database, description: 'Object storage service', color: 'text-amber-400' },
      { name: 'Lambda', icon: Zap, description: 'Serverless functions', color: 'text-lime-400' },
      { name: 'Git', icon: GitBranch, description: 'Version control', color: 'text-red-400' },
      { name: 'Jira', icon: Briefcase, description: 'Agile project management', color: 'text-blue-400' },
    ],
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  mockup: 'browser' | 'dashboard' | 'terminal' | 'mobile';
}

export const PROJECTS: Project[] = [
  {
    title: 'ProFlowers',
    category: 'Flower Booking Platform',
    description: 'A flower booking platform developed as part of a team, where I contributed to admin-panel UI development and REST API implementation.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS'],
    featured: true,
    mockup: 'browser',
  },
  {
    title: 'ShopSphere',
    category: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    mockup: 'dashboard',
  },
  {
    title: 'CryptoTrack',
    category: 'Crypto Website',
    description: 'Real-time cryptocurrency tracking platform with live price charts and portfolio management.',
    tags: ['React.js', 'REST APIs', 'TypeScript', 'Chart.js'],
    mockup: 'browser',
  },
  {
    title: 'EstateHub',
    category: 'Real-Estate Platform',
    description: 'Property listing platform with search filters, map integration, and agent dashboards.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'],
    mockup: 'browser',
  },
  {
    title: 'MediCare',
    category: 'Doctor / Clinical Website',
    description: 'Clinical appointment booking system with doctor schedules and patient records management.',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Tailwind'],
    mockup: 'mobile',
  },
  {
    title: 'ReviewHub',
    category: 'Feedback & Review Platform',
    description: 'Review and rating platform with moderation tools and analytics dashboard.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'AWS Lambda'],
    mockup: 'dashboard',
  },
  {
    title: 'AdminPanel',
    category: 'Admin Dashboard',
    description: 'Reusable admin dashboard framework with CRUD operations, charts, and role-based access.',
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js'],
    mockup: 'terminal',
  },
  {
    title: 'BusinessApp',
    category: 'Custom Business Web Application',
    description: 'Tailored business workflow application automating internal processes and reporting.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'AWS EC2'],
    mockup: 'browser',
  },
];

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Responsive and interactive web interfaces using React, Next.js and TypeScript.',
    icon: Layout,
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'REST APIs, authentication, business logic and MongoDB integrations.',
    icon: Server,
  },
  {
    number: '03',
    title: 'Full-Stack Applications',
    description: 'Complete web applications from UI to backend and database.',
    icon: Boxes,
  },
  {
    number: '04',
    title: 'Cloud & Deployment',
    description: 'AWS-based application deployment and cloud infrastructure.',
    icon: CloudUpload,
  },
];

export interface Principle {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Business First',
    description: 'I focus on understanding the actual problem before implementing the solution.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Clean Architecture',
    description: 'Build maintainable, reusable and scalable application structures.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'User Experience',
    description: 'Performance, responsiveness and usability are part of development.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Continuous Learning',
    description: 'Always exploring better tools, patterns and technologies.',
    icon: GraduationCap,
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Codesunset',
    role: 'Full-Stack Developer',
    location: 'Bengaluru, India • Remote',
    period: 'April 2024 – November 2026',
    responsibilities: [
      'Building responsive user interfaces',
      'Developing REST APIs',
      'React.js and Next.js development',
      'Node.js and Express.js backend development',
      'MongoDB database integration',
      'AWS cloud services',
      'Working with EC2, S3, Lambda and related services',
      'Collaborating on real-world client applications',
    ],
  },
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  description: string;
  icon: LucideIcon;
}

export const EDUCATIONS: EducationItem[] = [
  
{
  degree: 'MERN Stack Developer',
  field: 'Full Stack Web Development',
  institution: 'WAP Institute',
  period: '2022',
  description: 'Practical training in MongoDB, Express.js, React.js, Node.js, REST APIs, authentication, and full-stack web application development.',
  icon: Code2,
},
{
  degree: '12th — PCM Science',
  field: 'Physics, Chemistry & Mathematics',
  institution: 'Higher Secondary Education',
  period: '2021',
  description: 'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.',
  icon: BookOpen,
},
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  text?: string;
}

export const STATS: StatItem[] = [
  { value: 2.5, suffix: '+', label: 'Years Experience', decimals: 1 },
  { value: 10, suffix: '+', label: 'Project Types', decimals: 0 },
  { value: 0, suffix: '', label: 'Development', text: 'Full Stack' },
  { value: 0, suffix: '', label: 'Cloud Experience', text: 'AWS' },
];

export const CONTACT_LINKS = {
  email: '',
  whatsapp: "9162045107901",
};

export const PROFILE = {
  name: 'Md Ajhar Alam',
  role: 'Full-Stack Developer',
  photo: '/images/ajhar-photo.jpg',
};
