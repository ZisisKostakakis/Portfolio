import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zisiskostakakis.com';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects/connect-5`, lastModified: new Date() },
    { url: `${baseUrl}/projects/camera-ocr`, lastModified: new Date() },
    { url: `${baseUrl}/projects/transport-info`, lastModified: new Date() },
    { url: `${baseUrl}/projects/date-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/projects/student-loan-checker`, lastModified: new Date() },
    { url: `${baseUrl}/projects/property-pal-scraper`, lastModified: new Date() },
    { url: `${baseUrl}/projects/homelab`, lastModified: new Date() },
  ];
}
