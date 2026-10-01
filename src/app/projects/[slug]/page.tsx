import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CaseStudyView } from '@/components/case-study';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { caseStudies, getCaseStudy, getNextCaseStudy } from '@/data/case-studies';

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return { title: study ? `${study.name} — Mohamed` : 'Project not found' };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const next = getNextCaseStudy(slug);
  if (!study || !next) notFound();
  return <><Navbar/><main className="project-detail shell"><Link href="/#projects" className="back-link"><ArrowLeft size={16}/> Back to projects</Link><CaseStudyView study={study} next={next}/></main><Footer/></>;
}
