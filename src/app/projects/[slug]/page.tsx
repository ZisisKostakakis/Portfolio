import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = false;

export const projectDetails: Record<
  string,
  {
    title: string;
    metaDescription: string;
    project: Parameters<typeof ProjectTemplate>[0]['project'];
  }
> = {
  'connect-5': {
    title: 'Connect 5 Game | Zisis Kostakakis',
    metaDescription: 'Java Game with Graphical User Interface and AI Implementation.',
    project: {
      id: 'connect-5',
      href: '/projects/connect-5',
      title: 'Connect 5 Java Game',
      description: 'Java Game with Graphical User Interface and AI Implementation.',
      longDescription: `Connect-Five is a strategic two-player board game similar to tic-tac-toe, featuring an 8-column by 7-row vertical board. Players take turns placing colored pieces (typically black and red) with the goal of being the first to align five pieces horizontally, vertically, or diagonally.

The game implements a sophisticated AI opponent using the minimax algorithm with alpha-beta pruning optimization, providing challenging gameplay at multiple difficulty levels. The vertical board design adds a unique twist where pieces drop to the lowest available position in each column, creating strategic depth and requiring players to think several moves ahead.

Built with Java and Swing, the game features a polished graphical user interface that makes gameplay intuitive and enjoyable. The AI implementation showcases advanced game theory concepts and provides an excellent demonstration of algorithmic problem-solving in game development.`,
      githubUrl: 'https://github.com/ZisisKostakakis/Connect-5-game',
      technologies: [
        'Java',
        'Swing',
        'AI/ML',
        'Minimax Algorithm',
        'Alpha-Beta Pruning',
        'Game Theory',
      ],
      category: 'Game Development',
      date: '2023',
      features: [
        'Custom graphical user interface using Java Swing',
        'Intelligent AI opponent with minimax algorithm',
        'Alpha-beta pruning for optimal move calculation',
        'Multiple difficulty levels',
        'Two-player mode support',
        'Win detection for horizontal, vertical, and diagonal alignments',
        'Smooth piece dropping animations',
        'Strategic gameplay with depth and complexity',
      ],
      screenshots: [
        {
          src: '/images/Connect-5-one.png',
          alt: 'Connect 5 Game - Main Gameplay',
          caption: 'Active Game Session',
        },
        {
          src: '/images/Connect-5-two.png',
          alt: 'Connect 5 Game - AI Move',
          caption: 'AI Opponent in Action',
        },
      ],
    },
  },
  'camera-ocr': {
    title: 'Camera OCR | Zisis Kostakakis',
    metaDescription: 'iOS App that uses OCR to detect text from camera and ML Emotion Detection.',
    project: {
      id: 'camera-ocr',
      href: '/projects/camera-ocr',
      title: 'Camera OCR',
      description: 'iOS App that uses OCR to detect text from camera and ML Emotion Detection.',
      longDescription: `Camera OCR is an innovative iOS application that leverages Optical Character Recognition to convert pictures into editable text.

The app offers multiple practical features including text-to-speech conversion, automatic email address detection with Mail app integration, and to-do list creation capabilities. It also includes local scheduling notifications for enhanced productivity.

This dissertation project uniquely combines OCR technology with machine learning to detect emotional sentiment in text, making it particularly valuable for healthcare communication. For instance, less tech-savvy individuals can write a letter to their doctor, take a photo, and send it as an email with detected emotion metadata. This helps healthcare providers understand patients' emotional states and prioritize care accordingly, bridging the digital divide in healthcare communication.`,
      githubUrl: 'https://github.com/ZisisKostakakis/CameraOCR',
      technologies: [
        'Swift',
        'Vision Framework',
        'CoreML',
        'Machine Learning',
        'Natural Language Processing',
        'iOS Development',
      ],
      category: 'Mobile Development',
      date: '2023',
      features: [
        'Optical Character Recognition for image-to-text conversion',
        'Machine Learning-based emotion detection',
        'Text-to-speech functionality',
        'Automatic email address detection and Mail app integration',
        'To-do list creation from captured text',
        'Local scheduling notifications',
        'Designed for accessibility and ease of use',
        'Healthcare communication enhancement',
      ],
      demoVideos: [
        { title: 'OCR & Text-to-Speech Demo', src: '/videos/CameraOCR-one.mp4' },
        { title: 'Emotion Detection Demo', src: '/videos/CameraOCR-two.mp4' },
      ],
    },
  },
  'transport-info': {
    title: 'Transport Info | Zisis Kostakakis',
    metaDescription:
      'Full Stack Web App on AWS that uses public transport data to provide information to users.',
    project: {
      id: 'transport-info',
      href: '/projects/transport-info',
      title: 'Transport Info',
      description:
        'Full Stack Web App on AWS that uses public transport data to provide information to users.',
      longDescription: `Transport-Info is a Full Stack project utilizing both frontend and backend technologies.

The backend is served by an AWS EC2 server running Flask with Gunicorn and Nginx as web servers. The frontend is served by Vercel using Next.js 13 and TypeScript.

APIs are handled by AWS API Gateway with authentication keys. Data is stored on S3 and DynamoDB and fetched by the backend server upon request from the frontend.

This architecture provides a scalable, secure, and efficient solution for delivering real-time public transport information to users.`,
      githubUrl: 'https://github.com/ZisisKostakakis/Transport-Info',
      liveUrl: 'https://www.transports-info.com/',
      technologies: [
        'Python',
        'Flask',
        'Next.js 13',
        'TypeScript',
        'AWS EC2',
        'AWS Lambda',
        'AWS S3',
        'DynamoDB',
        'API Gateway',
        'Gunicorn',
        'Nginx',
        'Terraform',
      ],
      category: 'Full Stack',
      date: '2023',
      features: [
        'Real-time public transport data integration',
        'Serverless architecture with AWS Lambda',
        'RESTful API with AWS API Gateway',
        'Secure API authentication',
        'Scalable data storage with S3 and DynamoDB',
        'Infrastructure as Code with Terraform',
        'Modern responsive frontend with Next.js 13',
        'Production-ready deployment on Vercel and AWS',
      ],
      additionalRepos: [
        { label: 'Backend Repository', url: 'https://github.com/ZisisKostakakis/Web-app-python' },
      ],
      screenshots: [
        {
          src: '/images/Transport-Info.png',
          alt: 'Transport Info Website Screenshot',
          caption: 'Live Application',
        },
      ],
    },
  },
  'date-calculator': {
    title: 'Date Calculator | Zisis Kostakakis',
    metaDescription:
      'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
    project: {
      id: 'date-calculator',
      href: '/projects/date-calculator',
      title: 'Date Calculator',
      description:
        'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
      longDescription: `Date Calculator is a full-stack web application designed for calculating and tracking days across custom date ranges with configurable anchor periods. This tool is perfect for tracking travel days, residency requirements, or any time-based calculations that need to be measured against custom yearly periods.

The frontend is built with Next.js 15 and React 19, featuring an intuitive interface that allows users to add multiple date ranges using a modern date picker, configure custom anchor dates (e.g., September 17 to September 16), and automatically merge overlapping ranges for accurate calculations. The built-in visual heatmap provides a clear visualization of which days fall within each period.

The backend is a RESTful API built with Flask (Python) and deployed as a serverless AWS Lambda function using container images. The API handles complex date calculations, overlap merging, heatmap generation, and session management.`,
      githubUrl: 'https://github.com/ZisisKostakakis/date-calculator',
      liveUrl: 'https://date-calc.zisiskostakakis.com',
      technologies: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Flask',
        'Python',
        'AWS Lambda',
        'AWS API Gateway',
        'Docker',
        'Docker Compose',
        'Vercel',
        'Flatpickr',
      ],
      category: 'Full Stack',
      date: '2025',
      features: [
        'Flexible date range management with intuitive range picker interface',
        'Custom anchor periods - configure any anchor date (month/day) to define custom yearly periods',
        'Smart overlap merging - automatically merge overlapping date ranges for accurate calculations',
        'Visual heatmap - see exactly which days fall within each period with an interactive heatmap',
        'Threshold validation - set minimum day requirements per period and get pass/fail indicators',
        'Quick presets - fast selection of common ranges (today, last 7/30 days, current/last period)',
        'Persistent storage - save and load calculation sessions using localStorage',
        'Modern dark UI - beautiful, responsive dark theme built with Tailwind CSS',
        'Edge case handling - robust handling of leap years, Feb 29, and invalid dates',
        'Period boundary calculations - accurate calculations across year transitions',
      ],
      additionalRepos: [
        {
          label: 'Backend Repository',
          url: 'https://github.com/ZisisKostakakis/date-calculator-backend-app',
        },
      ],
    },
  },
  'student-loan-checker': {
    title: 'Student Loan Checker | Zisis Kostakakis',
    metaDescription:
      'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
    project: {
      id: 'student-loan-checker',
      href: '/projects/student-loan-checker',
      title: 'Student Loan Checker',
      description:
        'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
      longDescription: `Student Loan Checker is an automated Python bot built with Playwright that securely logs into the Student Loans Company (SLC) portal to retrieve comprehensive loan information. This tool automates the tedious process of manually checking loan balances and provides programmatic access to loan data.

The bot handles the complete authentication flow including email/password login, cookie consent management, and two-factor authentication using secret codes. It navigates through the SLC portal, extracts detailed loan information including current balance, salary repayments, direct repayments, interest added, and current interest rates.

Built with Python 3.11+ and Playwright, the bot features robust error handling, automatic cookie consent management, and support for both headless and visible browser modes.`,
      githubUrl: 'https://github.com/ZisisKostakakis/student-loan-checker',
      technologies: [
        'Python',
        'Playwright',
        'Web Scraping',
        'Browser Automation',
        'Environment Variables',
        'python-dotenv',
      ],
      category: 'Automation',
      date: '2025',
      features: [
        'Automated login with email and password authentication',
        'Two-factor authentication (2FA) / secret code support',
        'Comprehensive data scraping - extracts balance, salary repayments, direct repayments, interest added, and interest rates',
        'Secure credential management via environment variables (.env file)',
        'Robust error handling with detailed error messages',
        'Automatic cookie consent management',
        'Headless and visible browser modes for flexibility',
        'Programmatic API - can be imported and used as a module',
        'Clean class-based architecture for easy extension',
        'Comprehensive documentation and setup instructions',
      ],
    },
  },
  'property-pal-scraper': {
    title: 'PropertyPal Investment Analyzer | Zisis Kostakakis',
    metaDescription:
      'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
    project: {
      id: 'property-pal-scraper',
      href: '/projects/property-pal-scraper',
      title: 'PropertyPal Investment Analyzer',
      description:
        'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
      longDescription: `PropertyPal Investment Analyzer is a production-grade web scraper built with Scrapy that extracts property listings from PropertyPal.com and provides AI-powered investment analysis. This tool automates the process of researching property investments by combining web scraping, AI analysis, and geocoding to provide comprehensive property insights.

The scraper features an interactive CLI with multi-select search functionality, allowing users to configure and run multiple property searches simultaneously. Each property is analyzed using Perplexity's Housing Agent API to provide investment ratings out of 10, along with detailed pros, cons, and market outlook.

Built with Scrapy for robust web scraping, the application implements ethical scraping practices including rate limiting, robots.txt compliance, and respectful user-agent identification. Data is validated using Pydantic models and exported to both JSON and CSV formats through custom pipelines.`,
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
    },
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (!detail) return { title: 'Project Not Found' };
  return { title: detail.title, description: detail.metaDescription };
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (!detail) notFound();
  return <ProjectTemplate project={detail.project} />;
}
