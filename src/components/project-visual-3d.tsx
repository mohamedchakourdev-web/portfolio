'use client';

import Image from 'next/image';
import type { ProjectShot } from '@/data/project-shots';
import { useSurfaceTilt } from './use-surface-tilt';

export function ProjectVisual3D({ image, title, secondary, className = '' }: { image: ProjectShot; title: string; secondary?: ProjectShot; className?: string }) {
  const scene = useSurfaceTilt(2.5);

  return (
    <div ref={scene} className={`visual-scene ${className}`.trim()}>
      <div className="visual-stage">
        {secondary ? (
          <div className="visual-back" aria-hidden="true">
            <Image src={secondary.src} alt="" width={secondary.width} height={secondary.height} sizes="(max-width: 860px) 80vw, 720px" />
          </div>
        ) : null}
        <div className="visual-main">
          <Image src={image.src} alt={image.alt || `${title} preview`} width={image.width} height={image.height} sizes="(max-width: 860px) 100vw, 1080px" priority />
          <span className="shot-shade" aria-hidden="true" />
          <span className="tilt-light" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
