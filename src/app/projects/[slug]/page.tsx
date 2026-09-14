import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProjectPreview } from '@/components/project-preview';
import { getProject, projects } from '@/data/projects';
import { siteConfig } from '@/config/site';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return { title: project ? `${project.name} — Mohamed` : 'Project not found' }; }

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug); if (!project) notFound();
  return <><Navbar/><main className="project-detail shell"><Link href="/#projects" className="back-link"><ArrowLeft size={16}/> All projects</Link><div className="detail-hero"><div><span className="eyebrow">{project.category}</span><h1>{project.name}</h1><p>{project.description}</p><div className="detail-actions"><a className="button primary" href={siteConfig.links.github}><Github size={18}/> GitHub <ArrowUpRight size={16}/></a><a className="button secondary" href={siteConfig.links.liveDemo}>Live demo <ArrowUpRight size={16}/></a></div></div><ProjectPreview project={project}/></div><div className="case-study"><section><span>Overview</span><p>{project.overview}</p></section><section><span>Problem</span><p>{project.problem}</p></section><section><span>Solution</span><p>{project.solution}</p></section><section><span>Architecture</span><p>{project.architecture}</p></section></div><div className="detail-columns"><section><span className="eyebrow">TECHNOLOGIES</span><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section><section><span className="eyebrow">MAIN FEATURES</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section><section><span className="eyebrow">CHALLENGES</span><ul>{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section><section><span className="eyebrow">WHAT I LEARNED</span><ul>{project.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul></section></div></main><Footer/></>;
}
