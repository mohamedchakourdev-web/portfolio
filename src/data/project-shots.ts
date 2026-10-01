export type ProjectShot = { src: string; alt: string; width: number; height: number };

export const projectShots: Record<string, ProjectShot[]> = {
  reelyx: [
    { src: '/images/projects/reelyx/home.png', alt: 'Reelyx homepage', width: 1890, height: 903 },
    { src: '/images/projects/reelyx/movie-details.png', alt: 'Reelyx movie details', width: 1887, height: 783 },
    { src: '/images/projects/reelyx/watchlist.png', alt: 'Reelyx watchlist', width: 1879, height: 906 },
    { src: '/images/projects/reelyx/profile.png', alt: 'Reelyx profile', width: 1893, height: 904 },
  ],
  'ista-absence': [
    { src: '/images/projects/ista-absence/login.png', alt: 'ISTA Absence sign-in', width: 1918, height: 903 },
    { src: '/images/projects/ista-absence/dashboard.png', alt: 'ISTA Absence dashboard', width: 1918, height: 904 },
    { src: '/images/projects/ista-absence/absences.png', alt: 'ISTA Absence absences', width: 1918, height: 904 },
    { src: '/images/projects/ista-absence/groupes.png', alt: 'ISTA Absence groups', width: 1918, height: 907 },
  ],
  'car-rental': [
    { src: '/images/projects/car-rental/home.png', alt: 'Car Rental Demo homepage', width: 1893, height: 900 },
    { src: '/images/projects/car-rental/fleet.png', alt: 'Car Rental Demo fleet', width: 1887, height: 903 },
    { src: '/images/projects/car-rental/vehicle-details.png', alt: 'Car Rental Demo vehicle details', width: 1893, height: 871 },
  ],
};

const slideOffset: Record<string, number> = {
  reelyx: 0,
  'ista-absence': 1,
  'car-rental': 2,
};

export function initialSlide(slug: string, count: number) {
  if (count <= 0) return 0;
  return (slideOffset[slug] ?? 0) % count;
}
