'use client';

import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { siteConfig } from '@/config/site';

const links = [
  { label: 'Home', href: '/', section: 'home' },
  { label: 'Projects', href: '/#projects', section: 'projects' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setActive(null);
      return;
    }

    const updateActive = () => {
      const position = window.scrollY + window.innerHeight * .35;
      let current = 'home';
      for (const link of links) {
        const section = document.getElementById(link.section);
        if (section && section.offsetTop <= position) current = link.section;
      }
      setActive(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [pathname]);

  return <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation">
    <Link href="/" className="brand brand-identity" aria-label="Mohamed home"><span className="brand-monogram"><Image src="/mohamed-monogram.svg" alt="" width={82} height={48} priority /></span><span className="brand-copy"><b>MOHAMED 37<span className="brand-dot"></span></b><small>FULL STACK DEVELOPER</small></span></Link>
    <div className="nav-links">{links.map((link) => <Link className={active === link.section ? 'active' : undefined} aria-current={active === link.section ? 'location' : undefined} key={link.href} href={link.href}>{link.label}</Link>)}</div>
    <div className="nav-actions"><ThemeToggle /><Link className="nav-talk" href="/#contact">Let&apos;s Talk <ArrowUpRight size={16}/></Link><a className="social-icon" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={17}/></a><a className="social-icon" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={17}/></a></div>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation menu">{open ? <X/> : <Menu/>}</button>
  </nav><div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>{links.map((link) => <Link className={active === link.section ? 'active' : undefined} aria-current={active === link.section ? 'location' : undefined} onClick={() => setOpen(false)} key={link.href} href={link.href}>{link.label}</Link>)}<div><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></header>;
}
