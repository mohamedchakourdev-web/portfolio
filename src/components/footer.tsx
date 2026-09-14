import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return <footer className="footer shell"><div><a href="#home" className="brand"><span className="brand-mark">M</span><span>Mohamed<span className="brand-dot">.</span></span></a><p>Full Stack Web Developer<br/>React <i/> Laravel <i/> TypeScript</p></div><div className="footer-links"><a href={siteConfig.links.github} aria-label="GitHub"><Github size={18}/></a><a href={siteConfig.links.linkedin} aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${siteConfig.links.email}`} aria-label="Email"><Mail size={18}/></a></div><small>© {new Date().getFullYear()} Mohamed. Built with intention.</small></footer>;
}
