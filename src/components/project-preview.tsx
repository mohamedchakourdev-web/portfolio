'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { initialSlide, projectShots } from '@/data/project-shots';
import type { Project } from '@/types';

export function ProjectPreview({ project }: { project: Project }) {
  const shots = projectShots[project.slug] ?? [];
  const offset = initialSlide(project.slug, shots.length);
  const [current, setCurrent] = useState(offset);

  useEffect(() => {
    if (shots.length <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % shots.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [shots.length]);

  if (shots.length === 0) return null;

  return (
    <div className="preview preview-shot" data-shot={project.slug}>
      {shots.map((shot, index) => (
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          fill
          sizes="(max-width: 860px) 100vw, 640px"
          className={`preview-slide ${index === current ? 'is-active' : ''}`}
          aria-hidden={index !== current}
          priority={Boolean(project.featured) && index === 0}
        />
      ))}
      <span className="shot-shade" aria-hidden="true" />
      <span className="tilt-light" aria-hidden="true" />
    </div>
  );
}
