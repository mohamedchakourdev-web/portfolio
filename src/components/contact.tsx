import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  return <section id="contact" className="contact shell"><div><span className="eyebrow">04 — CONTACT</span><h2>Have a project or<br/><em>opportunity?</em></h2><p>I&apos;m open to junior full-stack opportunities, internships, freelance projects, and collaborations.</p></div><div className="contact-links"><a className="button primary" href={`mailto:${siteConfig.links.email}`}><Mail size={18}/> Email me <ArrowUpRight size={17}/></a><a href={siteConfig.links.linkedin}><Linkedin size={18}/> LinkedIn <ArrowUpRight size={15}/></a><a href={siteConfig.links.github}><Github size={18}/> GitHub <ArrowUpRight size={15}/></a><small>{siteConfig.links.email}</small></div></section>;
}
