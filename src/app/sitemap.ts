import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zisiskostakakis.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Transport-Info`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Camera-OCR`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Connect-5`,
      lastModified: new Date(),
    },
  ];
}
