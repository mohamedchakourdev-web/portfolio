import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohamed — Full Stack Web Developer',
  description: 'Portfolio of Mohamed, a Full Stack Web Developer specializing in React, Laravel, TypeScript, PHP and modern web applications.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Mohamed — Full Stack Web Developer',
    description: 'Portfolio of Mohamed, a Full Stack Web Developer specializing in React, Laravel, TypeScript, PHP and modern web applications.',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Mohamed — Full Stack Web Developer', description: 'Full Stack Web Developer specializing in React, Laravel and TypeScript.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className="font-sans">{children}</body></html>;
}
