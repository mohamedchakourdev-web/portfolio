import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'reelyx', name: 'Reelyx', category: 'Full Stack Web Application', featured: true, accent: 'blue',
    description: 'A full-stack movie and anime streaming platform focused on personalized discovery, user accounts, watchlists and viewing history.',
    technologies: ['React', 'Laravel', 'MySQL', 'REST API', 'Sanctum'],
    features: ['Movie and anime discovery', 'User authentication', 'Watchlist management', 'Viewing history', 'Continue watching', 'User profile', 'REST API integration', 'Protected routes and authorization'],
    overview: 'Reelyx is a full-stack movie and anime streaming platform for personalized discovery, user accounts, watchlists and viewing history.',
    problem: 'Discovery, accounts, watchlists and viewing history need to live in one product so people can find titles and return to what they were watching.',
    solution: 'Reelyx brings movie and anime discovery together with authentication, watchlist management, viewing history, continue watching, a user profile, and protected routes.',
    architecture: 'React provides the interface. Laravel exposes a REST API protected with Sanctum, and MySQL stores user accounts, watchlists and viewing history.',
    challenges: ['Connecting discovery with each account’s watchlist and viewing history', 'Protecting routes and authorization around user data', 'Supporting continue watching from viewing history'],
    learnings: ['Shipping a full-stack streaming product around user accounts', 'Integrating a REST API with protected routes', 'Modeling watchlists, history and continue watching'],
  },
  {
    slug: 'ista-absence', name: 'ISTA Absence', category: 'Business Management System', accent: 'violet',
    description: 'A web-based absence management system designed to simplify the management of trainers, groups, trainees, absences and authorizations.',
    technologies: ['React', 'Laravel', 'MySQL', 'REST API', 'Authentication', 'Role-based access'],
    features: ['Absence management', 'Trainer management', 'Group management', 'Trainee management', 'Authorization management', 'Dashboard', 'Authentication', 'Role-based permissions'],
    overview: 'ISTA Absence is a business management application for an educational environment, covering trainers, groups, trainees, absences and authorizations.',
    problem: 'Trainers, groups, trainees, absences and authorizations are difficult to manage when they are handled outside one shared system.',
    solution: 'A single web application provides those management workflows, a dashboard, authentication and role-based permissions.',
    architecture: 'React provides the interface. Laravel exposes the REST API, MySQL stores the management data, and authentication with role-based access controls who can use each part of the system.',
    challenges: ['Managing trainers, groups, trainees, absences and authorizations together', 'Applying role-based permissions across the application', 'Making daily absence work visible from a dashboard'],
    learnings: ['Building a management system for an educational environment', 'Combining authentication with role-based permissions', 'Organizing related operational workflows in one application'],
  },
  {
    slug: 'car-rental', name: 'Car Rental Demo', category: 'Premium Car Rental Experience', accent: 'teal',
    description: 'A premium responsive car rental website concept designed for modern Moroccan car rental agencies.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: ['Premium automotive UI', 'Vehicle fleet showcase', 'Vehicle categories and filtering', 'Vehicle detail pages', 'Booking interface', 'Responsive design', 'French / English / Arabic interface', 'Arabic RTL support', 'Smooth interactions and animations'],
    overview: 'Car Rental Demo is a frontend-focused premium UI/UX concept for modern Moroccan car rental agencies.',
    problem: 'A rental agency site has to present a fleet, vehicle details and a booking interface clearly, in more than one language, on every screen size.',
    solution: 'A responsive Next.js interface showcases the fleet, categories and filtering, vehicle detail pages and a booking interface, in French, English and Arabic, with Arabic RTL support.',
    architecture: 'The interface is built with Next.js, TypeScript and Tailwind CSS. It is a frontend concept: fleet, categories, detail pages and booking are presented in the UI.',
    challenges: ['Designing a premium automotive interface that stays responsive', 'Supporting French, English and Arabic, including Arabic RTL', 'Presenting fleet, categories, detail pages and booking as one experience'],
    learnings: ['Shaping a premium automotive UI', 'Building a multilingual interface with Arabic RTL support', 'Using Next.js, TypeScript and Tailwind CSS for a responsive marketing experience'],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
