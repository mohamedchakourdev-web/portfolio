import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'bizflow', name: 'BizFlow', category: 'Full Stack SaaS', featured: true, accent: 'blue',
    description: 'A full-stack workspace for running the operational side of a growing business — from clients to invoices.',
    technologies: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Sanctum', 'REST API'],
    features: ['Role-based access', 'Client & product management', 'Order workflows', 'Invoice generation', 'Analytics', 'PDF export'],
    overview: 'BizFlow brings fragmented day-to-day business operations into one focused, responsive workspace.',
    problem: 'Business data often lives across spreadsheets, inboxes, and disconnected tools, making simple operational decisions slower than they need to be.',
    solution: 'A clear dashboard and connected resource workflows give users one consistent place to manage clients, catalogue items, orders, invoices and team access.',
    architecture: 'React and TypeScript provide a typed interface layer, while Laravel exposes authenticated REST endpoints backed by relational MySQL data. Sanctum protects user sessions and API access.',
    challenges: ['Keeping related order, client and invoice data easy to scan', 'Designing role-aware actions without complicating the interface', 'Creating a responsive data-heavy workspace'],
    learnings: ['Translating business flows into intentional UI states', 'Structuring typed API boundaries', 'Balancing dashboard density with clarity'],
  },
  {
    slug: 'shopflow', name: 'ShopFlow', category: 'Frontend Application', accent: 'violet',
    description: 'A modern commerce dashboard for reviewing products, customers, orders and performance in one place.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    features: ['Commerce dashboard', 'Product management', 'Customer records', 'Order tracking', 'Search & filters', 'Pagination'],
    overview: 'ShopFlow is an interface concept for making daily commerce operations more visible and manageable.',
    problem: 'Admin tools can bury useful signals beneath dense tables and disconnected views.',
    solution: 'A focused navigation model, legible data tables and concise analytics surface the information needed for routine decisions.',
    architecture: 'A component-based React interface uses TypeScript for reliable UI data shapes, Tailwind CSS for the visual system, and Recharts for analytics visualisation.',
    challenges: ['Making tabular information usable on smaller screens', 'Creating useful empty and filtered states', 'Keeping visual hierarchy intact across dashboard modules'],
    learnings: ['Reusable data-display patterns', 'Responsive dashboard composition', 'Designing filters that remain discoverable'],
  },
  {
    slug: 'hrflow-api', name: 'HRFlow API', category: 'Backend / REST API', accent: 'teal',
    description: 'A production-style REST API for human resources workflows, authentication and employee administration.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Laravel Sanctum'],
    features: ['Authentication', 'Role authorization', 'Employees & departments', 'Leave requests', 'Validation', 'Pagination'],
    overview: 'HRFlow API models core employee and leave-management workflows through a well-structured REST interface.',
    problem: 'HR data requires clear relationships, protected access and dependable validation across interconnected resources.',
    solution: 'Resource-oriented endpoints, policy-driven access control and validated requests establish a durable API foundation for an HR client application.',
    architecture: 'Laravel organizes controllers, requests, policies and Eloquent models around REST resources. MySQL stores the relational employee, department and leave data; Sanctum manages authentication.',
    challenges: ['Modeling leave states and relationships', 'Separating authorization from controller logic', 'Delivering consistent validation and pagination responses'],
    learnings: ['Laravel policy patterns', 'Relational schema design', 'API contracts that support frontend teams'],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
