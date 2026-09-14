import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/types';
import { ProjectPreview } from './project-preview';
import { siteConfig } from '@/config/site';

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card ${project.featured ? 'featured' : ''}`}><div className="project-preview-wrap"><ProjectPreview project={project}/><span className="project-index">{project.featured ? '01 / FLAGSHIP' : project.slug === 'shopflow' ? '02 / INTERFACE' : '03 / BACKEND'}</span></div><div className="project-content"><div className="project-topline"><span>{project.category}</span>{project.featured && <span className="flagship-label">Featured build</span>}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><ul className="feature-list">{project.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="project-actions"><Link href={`/projects/${project.slug}`} className="text-link">View case study <ArrowUpRight size={16}/></Link><a href={siteConfig.links.github} className="ghost-link" aria-label={`View ${project.name} on GitHub`}><Github size={17}/> Code</a></div></div></article>;
}
