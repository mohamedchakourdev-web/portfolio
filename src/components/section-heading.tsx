type Props = { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center' };
export function SectionHeading({ eyebrow, title, copy, align = 'left' }: Props) {
  return <div className={`section-heading ${align === 'center' ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
