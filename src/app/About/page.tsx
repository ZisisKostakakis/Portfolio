import { personalInfo } from '@/lib/data/personal';
import AboutContent from '@/components/about-content';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About | Zisis Kostakakis',
  description: `Learn more about ${personalInfo.name}, a ${personalInfo.title} specializing in AWS cloud development.`,
};

export default function About() {
  return <AboutContent />;
}
