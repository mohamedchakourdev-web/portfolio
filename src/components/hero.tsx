import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  return <section id="home" className="hero hero-portrait shell">
    <div className="hero-photo">
      <div className="portrait-glow" />
      <div className="hero-portrait-frame">
        <Image src="/Mohamed.png" alt="Mohamed, Full Stack Web Developer" fill priority sizes="(max-width: 860px) 100vw, 50vw" className="hero-portrait" />
      </div>
      <span className="portrait-caption"></span>
    </div>
    <div className="hero-info">
      <div className="availability"><span /> FULL STACK WEB DEVELOPER</div>
      <p className="hero-kicker">FULL STACK WEB DEVELOPER <i /> MOROCCO</p>
      <p className="hero-name">Mohamed <span>/</span> Full Stack Web Developer</p>
      <h1>Building modern<br/>web applications<br/>with <em>React &amp; Laravel.</em></h1>
      <p className="hero-description">I build responsive frontends, reliable REST APIs and complete business applications with a focus on clean architecture and practical user experience.</p>
      <div className="hero-buttons"><a className="button primary" href="#projects">View projects <ArrowDownRight size={18} /></a><a className="button secondary" href={siteConfig.links.cv} download>Download CV <ArrowDownRight size={18} /></a></div>
    </div>
    <div className="hero-social hero-social-portrait"><a href={siteConfig.links.github}><Github size={16} /> GitHub <ArrowUpRight size={14} /></a><a href={siteConfig.links.linkedin}><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a></div>
  </section>;
}
