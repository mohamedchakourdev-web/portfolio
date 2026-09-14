'use client';

import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { siteConfig } from '@/config/site';

const links = [{ label: 'Home', href: '#home' }, { label: 'Projects', href: '#projects' }, { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation">
    <a href="#home" className="brand" aria-label="Mohamed home"><span className="brand-mark">M</span><span>Mohamed<span className="brand-dot">.</span></span></a>
    <div className="nav-links">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
    <div className="nav-actions"><a className="social-icon" href={siteConfig.links.github} aria-label="GitHub profile"><Github size={18}/></a><a className="social-icon" href={siteConfig.links.linkedin} aria-label="LinkedIn profile"><Linkedin size={18}/></a><ThemeToggle /></div>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation menu">{open ? <X/> : <Menu/>}</button>
  </nav><div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>{links.map((link) => <a onClick={() => setOpen(false)} key={link.href} href={link.href}>{link.label}</a>)}<div><a href={siteConfig.links.github}>GitHub</a><a href={siteConfig.links.linkedin}>LinkedIn</a></div></div></header>;
}
