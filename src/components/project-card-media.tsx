'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { ProjectPreview } from './project-preview';
import { useSurfaceTilt } from './use-surface-tilt';

function cardIndex(project: Project) {
  if (project.featured) return '01 / FLAGSHIP';
  if (project.slug === 'ista-absence') return '02 / BUSINESS';
  return '03 / INTERFACE';
}

export function ProjectCardMedia({ project }: { project: Project }) {
  const scene = useSurfaceTilt(5);

  return (
    <div ref={scene} className="project-preview-wrap card-scene">
      <div className="card-tilt">
        <ProjectPreview project={project} />
        <Link href={`/projects/${project.slug}`} className="preview-cta">
          View case study <ArrowUpRight size={15} />
        </Link>
      </div>
      <span className="project-index">{cardIndex(project)}</span>
    </div>
  );
}
