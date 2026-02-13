import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'PropertyPal Investment Analyzer | Zisis Kostakakis',
  description:
    'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
};

export default function PropertyPalScraper() {
  const project = {
    id: 'property-pal-scraper',
    href: '/Property-Pal-Scraper',
    title: 'PropertyPal Investment Analyzer',
    description:
      'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
    longDescription: `PropertyPal Investment Analyzer is a production-grade web scraper built with Scrapy that extracts property listings from PropertyPal.com and provides AI-powered investment analysis. This tool automates the process of researching property investments by combining web scraping, AI analysis, and geocoding to provide comprehensive property insights.

The scraper features an interactive CLI with multi-select search functionality, allowing users to configure and run multiple property searches simultaneously. Each property is analyzed using Perplexity's Housing Agent API to provide investment ratings out of 10, along with detailed pros, cons, and market outlook. The tool also calculates mortgage payments based on configurable parameters and computes distances from properties to specified destinations using geocoding services.

Built with Scrapy for robust web scraping, the application implements ethical scraping practices including rate limiting, robots.txt compliance, and respectful user-agent identification. Data is validated using Pydantic models and exported to both JSON and CSV formats through custom pipelines. The scraper handles pagination automatically, extracts comprehensive property details including descriptions, features, and room details, and includes extensive error handling and retry mechanisms.

The project features a well-structured codebase with separation of concerns, comprehensive documentation with troubleshooting guides, and secure API key management through environment variables. It includes a Makefile for convenient command execution and supports both headless and interactive modes for different use cases.`,
    githubUrl: 'https://github.com/ZisisKostakakis/property-pal-scraper',
    technologies: [
      'Python',
      'Scrapy',
      'Perplexity API',
      'Pydantic',
      'Web Scraping',
      'Data Pipelines',
      'Geocoding',
      'OpenStreetMap',
    ],
    category: 'Automation',
    date: '2026',
    features: [
      'Automated property data extraction with pagination support',
      'AI-powered investment ratings via Perplexity Housing Agent',
      'Geocoding with distance calculations from custom destinations',
      'Interactive CLI with multi-select search functionality',
      'Automated mortgage payment calculations (configurable parameters)',
      'CSV/JSON export pipelines with Pydantic validation',
      'Ethical scraping with rate limiting and robots.txt compliance',
      'Comprehensive error handling and retry mechanisms',
      'Structured data extraction (descriptions, features, room details)',
      'Makefile for convenient command execution',
    ],
  };

  return <ProjectTemplate project={project} />;
}
