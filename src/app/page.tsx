import { personalInfo } from '@/lib/data/personal';
import HomeContent from '@/components/home-content';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Home | Zisis Kostakakis',
  description: personalInfo.tagline,
};

export default function Home() {
  return <HomeContent />;
}
