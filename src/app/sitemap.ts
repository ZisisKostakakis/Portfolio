import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/data/personal';
import { projectSlugs } from '@/lib/data/project-details';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectSlugs.map((slug) => ({
      url: `${SITE_CONFIG.url}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
