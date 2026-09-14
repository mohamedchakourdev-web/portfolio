import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Process } from '@/components/process';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/data/projects';

export default function Home() {
    return <>
        <Navbar />
        <main>
            <Hero />
            <section id="projects" className="section shell projects">
                <SectionHeading eyebrow="01 — SELECTED WORK" title="Projects built around real workflows" copy="A mix of interface, API and full-stack work — all focused on useful, well-considered experiences" />
                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard project={project} key={project.slug} />
                    ))}
                </div>
            </section>
            <About />
            <Process />
            <Contact />
        </main>
    </>;
}
