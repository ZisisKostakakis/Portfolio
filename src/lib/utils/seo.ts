import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { SEOMetadata } from '@/lib/types';

/**
 * Generate metadata for Next.js pages
 */
export function generateMetadata(seo: SEOMetadata): Metadata {
  const title = seo.title ? `${seo.title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const description = seo.description || SITE_CONFIG.description;
  const ogImage = seo.ogImage || '/og-image.png';

  return {
    title,
    description,
    keywords: seo.keywords || [...SITE_CONFIG.keywords],
    authors: [{ name: SITE_CONFIG.author }],
    openGraph: {
      title,
      description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: seo.twitterCard || 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for a person
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zisis Kostakakis',
    jobTitle: 'Full Stack Engineer',
    url: SITE_CONFIG.url,
    sameAs: [
      'https://www.linkedin.com/in/zisis-kostakakis-5b85961b7/',
      'https://github.com/ZisisKostakakis',
    ],
  };
}

/**
 * Generate JSON-LD structured data for a project
 */
export function generateProjectSchema(project: {
  title: string;
  description: string;
  date?: string;
  technologies: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    datePublished: project.date,
    keywords: project.technologies.join(', '),
    author: {
      '@type': 'Person',
      name: 'Zisis Kostakakis',
    },
  };
}
