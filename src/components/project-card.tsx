import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/types';
import { siteConfig } from '@/config/site';
import { ProjectCardMedia } from './project-card-media';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <ProjectCardMedia project={project} />
      <div className="project-content">
        <div className="project-topline">
          <span>{project.category}</span>
          {project.featured && <span className="flagship-label">Featured build</span>}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <ul className="feature-list">{project.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="project-actions">
          <Link href={`/projects/${project.slug}`} className="text-link">View case study <ArrowUpRight size={16} /></Link>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="ghost-link" aria-label={`View ${project.name} on GitHub`}><Github size={17} /> Code</a>
        </div>
      </div>
    </article>
  );
}
