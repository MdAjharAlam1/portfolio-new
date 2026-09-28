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

export interface ProjectWorkBreakdown {
  frontend: string[];
  backend: string[];
}

export interface Project {
  title: string;
  domain: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  mockup: 'crm' | 'books' | 'hr' | 'inventory' | 'project' | 'school';
  work: ProjectWorkBreakdown;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'CRM Platform',
    domain: 'crm.techsunset.com',
    category: 'Customer & Lead Management',
    description: 'CRM (Customer Relationship Management) is a software used to manage customers, leads, sales, and customer interactions in one place.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
    image: '/images/crm.jpg',
    mockup: 'crm',
    liveUrl: 'https://crm.techsunset.com',
    work: {
      frontend: [
        'Customer list and customer details view',
        'Customer add and edit forms with validation',
        'Lead management and sales pipeline screens',
        'Real-time search and multi-parameter filtering',
        'Interactive analytics dashboard and data visualization',
        'REST API integration with backend services',
        'Form validation and comprehensive error handling',
      ],
      backend: [
        'Full CRUD REST APIs for customer data',
        'Lead management and conversion lifecycle APIs',
        'Optimized search indexing for customers and leads',
        'Customer status and pipeline state updates',
        'User authentication and role-based authorization (JWT)',
        'Request validation and structured error handling middleware',
        'MongoDB schema design, indexing and database connection',
      ],
    },
  },
  {
    title: 'TechSunset Books',
    domain: 'books.techsunset.com',
    category: 'Accounting, GST & Invoicing',
    description: 'TechSunset Books is accounting and invoicing software used to manage invoices, payments, expenses, customers, vendors, GST, and financial reports in one place.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
    image: '/images/books.jpg',
    mockup: 'books',
    liveUrl: 'https://books.techsunset.com',
    work: {
      frontend: [
        'Financial summary dashboard & revenue metrics',
        'Invoice list, invoice creation forms & PDF export',
        'Customer and vendor ledger management',
        'Expense tracking and categorization screens',
        'Payment status and transaction tracking',
        'GST tax summary and financial reports',
        'API integration, form validation and error handling',
      ],
      backend: [
        'CRUD APIs for creating, updating, deleting and fetching invoices',
        'Customer and vendor management endpoints',
        'Expense management and ledger calculation',
        'Payment tracking and reconciliation APIs',
        'GST calculation and financial report data engine',
        'Request validation and error handling middleware',
        'MongoDB integration for invoices, expenses and financial data',
      ],
    },
  },
  {
    title: 'TechSunset HR',
    domain: 'hr.techsunset.com',
    category: 'HRMS & Employee Management',
    description: 'TechSunset HR is an Human Resource management software used to manage employees, attendance, leaves, onboarding, departments, holidays, and HR reports in one place.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/hr.jpg',
    mockup: 'hr',
    liveUrl: 'https://hr.techsunset.com',
    work: {
      frontend: [
        'Employee directory, profile cards and details view',
        'Employee add and edit forms with document upload',
        'Daily attendance management and check-in screens',
        'Leave request submission and approval workflows',
        'Department structure and holiday calendar management',
        'Employee onboarding flow and checklists',
        'HR reports, department headcount and analytics dashboard',
        'API integration, form validation and error handling',
      ],
      backend: [
        'Employee CRUD operations and profile data APIs',
        'Attendance tracking and monthly logging APIs',
        'Leave management and approval workflow engine',
        'Department and holiday schedule management',
        'Employee onboarding lifecycle management',
        'HR analytics, reporting and export endpoints',
        'Authentication, authorization, validation and MongoDB connection',
      ],
    },
  },
  {
    title: 'TechSunset Inventory',
    domain: 'inventory.techsunset.com',
    category: 'Inventory & Warehouse System',
    description: 'TechSunset Inventory is inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment in one place.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/inventory.jpg',
    mockup: 'inventory',
    liveUrl: 'https://inventory.techsunset.com',
    work: {
      frontend: [
        'Product catalog, SKU list and product details view',
        'Add and edit product forms with multi-variants',
        'Real-time inventory levels and low-stock alert screens',
        'Sales order management and tracking screens',
        'Supplier directory and purchase order management',
        'Multi-warehouse stock allocation management',
        'Fulfillment tracking and stock valuation reports',
        'API integration, search and filtering',
      ],
      backend: [
        'Product CRUD operations and variant management',
        'Stock and inventory level synchronization APIs',
        'Sales order lifecycle and status management',
        'Supplier and purchase order management APIs',
        'Warehouse allocation and transfer routing',
        'Stock reservation and automatic inventory decrement',
        'Request validation, error handling and MongoDB connection',
      ],
    },
  },
  {
    title: 'TechSunset Project',
    domain: 'project.techsunset.com',
    category: 'Task & Project Management',
    description: 'TechSunset Project is project and task management software used to manage projects, tasks, deadlines, milestones, team workload, and progress in one place.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/project.jpg',
    mockup: 'project',
    liveUrl: 'https://project.techsunset.com',
    work: {
      frontend: [
        'Project list, overview cards and project details',
        'Task creation modal with priority, tags and assignees',
        'Interactive Drag-and-Drop Kanban board view',
        'Task status, priority badges and sprint filters',
        'Calendar view and milestone deadline timeline',
        'Milestone tracking and overall project progress bars',
        'Team workload distribution and performance reports',
        'API integration, form validation and notifications',
      ],
      backend: [
        'Project CRUD operations and workspace management',
        'Task and subtask hierarchy management APIs',
        'Assigning tasks to team members and workload tracking',
        'Task status transitions and priority management',
        'Milestone, sprint and deadline management engine',
        'Team workload analytics and time tracking APIs',
        'Request validation, error handling and MongoDB database connection',
      ],
    },
  },
  {
    title: 'TS Campus',
    domain: 'tscampus.com',
    category: 'School Management ERP System',
    description: 'TS Campus is a school management system used to manage admissions, students, attendance, fees, exams, staff, communication, and other school operations in one place.',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/tscampus.jpg',
    mockup: 'school',
    liveUrl: 'https://tscampus.com',
    work: {
      frontend: [
        'Student directory, profile view and academic records',
        'Admission portal and student registration forms',
        'Classroom daily attendance management',
        'Fee structure, fee collection and receipt generation',
        'Class, section and subject timetable management',
        'Exam scheduling, marks entry and report card screens',
        'Staff and teacher HR management directory',
        'Dashboard analytics, student reports and notifications',
        'API integration, form validation and error handling',
      ],
      backend: [
        'Student records and admission processing APIs',
        'Attendance management and reporting endpoints',
        'Fee structure, payment tracking and receipt APIs',
        'Class, section and subject timetable relational APIs',
        'Exam scheduling, grading and result calculation engine',
        'Staff and employee management endpoints',
        'Notification broadcasting and communication service',
        'Authentication, RBAC and MongoDB database connection',
      ],
    },
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
