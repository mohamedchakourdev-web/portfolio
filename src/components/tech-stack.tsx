import { Braces, Code2, Database, FileCode2, GitBranch, Github, LayoutTemplate, Send, Server, Wind } from 'lucide-react';
import { SectionHeading } from './section-heading';

const skillGroups = [
  { name: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Server, skills: ['Laravel', 'PHP', 'REST API', 'Sanctum'] },
  { name: 'Database', icon: Database, skills: ['MySQL', 'Eloquent', 'Database Design'] },
  { name: 'Tools', icon: GitBranch, skills: ['Git', 'GitHub', 'Postman', 'Docker'] },
 ] as const;

const supportingIcons = { Frontend: LayoutTemplate, Backend: FileCode2, Database: Braces, Tools: Send, GitHub: Github, Tailwind: Wind };

export function TechStack() {
  return <section className="section shell tech-section"><SectionHeading eyebrow="01 — TOOLKIT" title="A practical stack for ambitious web products." copy="Tools selected for clarity, maintainability and the ability to ship."/><div className="skill-groups">{skillGroups.map(({ name, icon: Icon, skills }) => { const SupportingIcon = supportingIcons[name]; return <section className="skill-group" key={name}><div className="skill-group-heading"><Icon size={20}/><div><span>{name}</span><small>{skills.length} technologies</small></div><SupportingIcon size={16}/></div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>; })}</div></section>;
}
