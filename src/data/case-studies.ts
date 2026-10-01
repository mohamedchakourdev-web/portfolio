import { projectShots, type ProjectShot } from './project-shots';

export type CaseStudyImage = ProjectShot;

export type CaseStudy = {
  slug: string;
  category: string;
  name: string;
  description: string;
  github?: string;
  live?: string;
  what: string;
  problem: string;
  role: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  result: string;
  images: CaseStudyImage[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reelyx',
    category: 'Full Stack Web Application',
    name: 'Reelyx',
    description: 'A full-stack movie and anime discovery platform focused on personalized content discovery, user accounts, watchlists and viewing history.',
    github: 'https://github.com/mohamedchakourdev-web/Reelyx',
    what: 'Reelyx is a discovery product for movies, series and anime. An account can keep a watchlist, a viewing history and a continue-watching list, separate from the public catalog.',
    problem: 'Finding a title and remembering where you left off are usually split across different places. Reelyx keeps discovery and that personal record in one application.',
    role: 'I built the React client and the Laravel API, including the account routes and the catalog integration.',
    technologies: ['React', 'Laravel', 'MySQL', 'REST API', 'Sanctum'],
    features: ['Movie discovery', 'Series discovery', 'Anime discovery', 'User authentication', 'Google OAuth', 'Password reset', 'Watchlist', 'Viewing history', 'Continue watching', 'User profile', 'Protected routes', 'REST API integration'],
    highlights: [
      'The React client reads a Laravel REST API.',
      'MySQL stores users, watchlists and viewing history.',
      'Sanctum protects the profile, watchlist and history endpoints.',
      'Movies and series come from TMDB. Anime comes from Jikan.',
      'Watchlist, profile, history and continue watching sit behind protected frontend routes.',
      'Sign-in also includes Google OAuth and password reset.',
    ],
    result: 'Reelyx shows a full-stack product: a public catalog, account-owned viewing data, and an API that only returns that data to the signed-in user.',
    images: projectShots.reelyx,
  },
  {
    slug: 'ista-absence',
    category: 'Business Management System',
    name: 'ISTA Absence',
    description: 'A web-based absence management platform designed to simplify the management of trainers, groups, trainees, absences and authorizations in an educational environment.',
    github: 'https://github.com/mohamedchakourdev-web/ista_tiznit',
    live: 'https://ista-tiznit.vercel.app/',
    what: 'ISTA Absence is a management application for an educational institute. It covers trainers, groups, trainees, absences and authorizations, with a dashboard for each role.',
    problem: 'Directors, managers and trainers need the same student records, but not the same actions. A shared spreadsheet does not keep those boundaries clear.',
    role: 'I built the Next.js interface and the Laravel API, including authentication and the role checks for directors, managers and trainers.',
    technologies: ['Next.js', 'React', 'Laravel', 'MySQL', 'REST API', 'Sanctum', 'Role-based access'],
    features: ['Dashboard', 'Absence management', 'Trainer management', 'Group management', 'Trainee management', 'Authorization management', 'Authentication', 'Role-based permissions'],
    highlights: [
      'The interface is a Next.js application with separate workspaces for each role.',
      'Laravel exposes the management workflows as a REST API.',
      'MySQL stores the institute records.',
      'Sanctum authenticates each session.',
      'Roles and permissions gate absences, groups, trainees, authorizations and programs.',
    ],
    result: 'The project shows a business application for an educational environment, where the same records are managed differently depending on who is signed in.',
    images: projectShots['ista-absence'],
  },
  {
    slug: 'car-rental',
    category: 'Premium Car Rental Experience',
    name: 'Car Rental Demo',
    description: 'A premium responsive car rental website concept designed for modern Moroccan car rental agencies.',
    github: 'https://github.com/mohamedchakourdev-web/location-voiture-demo',
    what: 'Car Rental Demo is a frontend concept for a Moroccan car rental agency. It presents a fleet, vehicle categories, detail pages and a booking interface.',
    problem: 'The site has to feel considered on a phone and in three languages, including Arabic laid out from right to left.',
    role: 'I designed and built the interface. Vehicle records, booking steps and translations live in the frontend. There is no API or database behind this project.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: ['Premium automotive interface', 'Vehicle fleet showcase', 'Vehicle categories', 'Vehicle filtering', 'Vehicle detail pages', 'Booking interface', 'Responsive design', 'French / English / Arabic interface', 'Arabic RTL support', 'Smooth interactions'],
    highlights: [
      'Next.js pages cover the fleet, each vehicle and the booking flow.',
      'TypeScript vehicle data feeds those screens. It is interface data, not a database.',
      'Tailwind CSS handles the responsive layout.',
      'French, English and Arabic are stored as dictionaries and switched in the browser.',
      'Arabic sets the document direction to RTL.',
      'The fleet can be filtered by category, and the booking flow is an interactive interface.',
    ],
    result: 'The project shows a premium, responsive, multilingual interface. Fleet, details, filtering and booking are all handled in the frontend.',
    images: projectShots['car-rental'],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index < 0) return undefined;
  return caseStudies[(index + 1) % caseStudies.length];
}
