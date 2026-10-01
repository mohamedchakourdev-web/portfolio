import Image from 'next/image';
import type { ProjectShot } from '@/data/project-shots';
import { Reveal } from './reveal';

export function ProjectScreenshotShowcase({ images }: { images: ProjectShot[] }) {
  return (
    <div className="study-gallery">
      {images.map((image, index) => (
        <Reveal key={image.src} delay={index * 70}>
          <figure className={`shot-card ${index % 2 === 0 ? 'is-inset' : 'is-offset'}`}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 1160px) 100vw, 1080px" />
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
