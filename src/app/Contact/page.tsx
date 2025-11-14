import { personalInfo, socialLinks } from '@/lib/data/personal';
import ContactContent from '@/components/contact-content';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Contact | Zisis Kostakakis',
  description: `Get in touch with ${personalInfo.name}. Available for opportunities and collaborations.`,
};

export default function Contact() {
  return <ContactContent />;
}
