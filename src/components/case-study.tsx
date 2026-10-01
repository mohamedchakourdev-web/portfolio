import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { caseStudies, type CaseStudy } from '@/data/case-studies';
import { ProjectScreenshotShowcase } from './project-screenshot';
import { ProjectVisual3D } from './project-visual-3d';
import { Reveal } from './reveal';

export function CaseStudyView({ study, next }: { study: CaseStudy; next: CaseStudy }) {
  const number = String(caseStudies.findIndex((item) => item.slug === study.slug) + 1).padStart(2, '0');
  const [hero, secondary] = study.images;

  return <article className="study">
    <header className="study-hero">
      <div className="study-hero-copy">
        <span className="eyebrow study-kicker">{number} — {study.category}</span>
        <h1>{study.name}</h1>
        <p>{study.description}</p>
        <p className="study-stack">{study.technologies.join(' • ')}</p>
        <div className="detail-actions">
          {study.live && <a className="button primary" href={study.live} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16}/></a>}
          {study.github && <a className={`button ${study.live ? 'secondary' : 'primary'}`} href={study.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> View code <ArrowUpRight size={16}/></a>}
        </div>
      </div>
      {hero ? <Reveal><ProjectVisual3D image={hero} secondary={secondary} title={study.name} /></Reveal> : null}
    </header>

    <section className="study-section">
      <h2>Project overview</h2>
      <div className="study-grid">
        <article><span>What it is</span><p>{study.what}</p></article>
        <article><span>Use case</span><p>{study.problem}</p></article>
        <article><span>My role</span><p>{study.role}</p></article>
        <article><span>Technologies</span><p>{study.technologies.join(' · ')}</p></article>
      </div>
    </section>

    <section className="study-section">
      <h2>Key features</h2>
      <ul className="study-features">{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    </section>

    <section className="study-section">
      <h2>Technology</h2>
      <Reveal>
        <div className="tags study-tags">{study.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </Reveal>
    </section>

    <section className="study-section">
      <h2>Project visuals</h2>
      {study.images.length > 0 ? <ProjectScreenshotShowcase images={study.images} /> : <div className="study-frame"><span>01</span><p>A frame reserved for real {study.name} screenshots. None are included yet.</p></div>}
    </section>

    <section className="study-section">
      <h2>Technical highlights</h2>
      <ul className="study-highlights">{study.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>

    <section className="study-section">
      <h2>Result</h2>
      <p className="study-result">{study.result}</p>
    </section>

    <Link href={`/projects/${next.slug}`} className="study-next">
      <span><span className="eyebrow">Next project</span><strong>{next.name}</strong></span>
      <ArrowUpRight size={22}/>
    </Link>
  </article>;
}
