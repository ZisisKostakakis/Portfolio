import { cache } from 'react';
import { Project } from '@/lib/types';

const projectsData: Project[] = [
  {
    id: 'connect-5',
    order: 8,
    href: '/projects/connect-5',
    title: 'Connect 5 Java Game',
    description: 'Java Game with Graphical User Interface and AI Implementation.',
    longDescription:
      'A strategic board game built with Java featuring a custom GUI and intelligent AI opponent. Implements minimax algorithm with alpha-beta pruning for optimal gameplay.',
    image: '/images/Connect-5-one.png',
    githubUrl: 'https://github.com/ZisisKostakakis',
    technologies: ['Java', 'Swing', 'AI/ML'],
    category: 'Game Development',
    date: '2023',
    features: [
      'Graphical User Interface using Java Swing',
      'AI opponent with minimax algorithm',
      'Alpha-beta pruning optimization',
      'Multiple difficulty levels',
    ],
  },
  {
    id: 'camera-ocr',
    order: 7,
    href: '/projects/camera-ocr',
    title: 'CameraOCR',
    description: 'IOS App that uses OCR to detect text from camera and ML Emotion Detection.',
    longDescription:
      'An iOS application that leverages computer vision and machine learning to extract text from camera images and detect emotions in real-time.',
    image: '/images/Camera-OCR.png',
    githubUrl: 'https://github.com/ZisisKostakakis',
    technologies: ['Swift', 'CoreML', 'Vision', 'OCR', 'Machine Learning'],
    category: 'Mobile Development',
    date: '2023',
    features: [
      'Real-time OCR text detection',
      'Emotion recognition using CoreML',
      'Camera integration with live preview',
      'Text extraction and processing',
    ],
  },
  {
    id: 'transport-info',
    order: 6,
    href: '/projects/transport-info',
    title: 'Transport Info',
    description:
      'Full Stack Web App on AWS that uses public transport data to provide information to users.',
    longDescription:
      'A comprehensive full-stack application deployed on AWS infrastructure that aggregates and displays real-time public transportation data to help users plan their journeys.',
    image: '/images/Transport-Info.png',
    githubUrl: 'https://github.com/ZisisKostakakis',
    technologies: ['Python', 'Flask', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudWatch', 'Terraform'],
    category: 'Full Stack',
    date: '2023',
    features: [
      'Real-time transport data integration',
      'Serverless architecture with AWS Lambda',
      'RESTful API with API Gateway',
      'Infrastructure as Code with Terraform',
      'Scalable data storage with DynamoDB',
    ],
  },
  {
    id: 'date-calculator',
    order: 5,
    href: '/projects/date-calculator',
    title: 'Date Calculator',
    description:
      'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
    longDescription:
      'A full-stack date calculation tool with a Next.js 15/React 19 frontend and a Flask (Python) backend deployed on AWS Lambda. Perfect for tracking travel days, residency requirements, or any time-based calculations that need to be measured against custom yearly periods.',
    image: '/images/Date-Calculator.png',
    githubUrl: 'https://github.com/ZisisKostakakis/date-calculator',
    liveUrl: 'https://date-calc.zisiskostakakis.com',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Python', 'AWS Lambda', 'AWS API Gateway', 'Docker', 'Vercel'],
    category: 'Full Stack',
    date: '2025',
    features: [
      'Flexible date range management with intuitive range picker',
      'Custom anchor periods (e.g., Sept 17 - Sept 16)',
      'Smart overlap merging for accurate calculations',
      'Visual heatmap to see which days fall within each period',
      'Threshold validation with pass/fail indicators',
      'Quick presets for common ranges',
      'Persistent storage with localStorage',
      'Modern dark UI with responsive design',
    ],
  },
  {
    id: 'student-loan-checker',
    order: 4,
    href: '/projects/student-loan-checker',
    title: 'Student Loan Checker',
    description:
      'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
    longDescription:
      'A Python automation bot built with Playwright that securely logs into the Student Loans Company (SLC) portal to retrieve comprehensive loan information. The bot handles authentication, two-factor authentication, and scrapes detailed loan data including balance, repayments, interest rates, and more.',
    image: '/images/Student-Loan-Checker.png',
    githubUrl: 'https://github.com/ZisisKostakakis/student-loan-checker',
    technologies: ['Python', 'Playwright', 'Web Scraping', 'Automation', 'Environment Variables'],
    category: 'Automation',
    date: '2025',
    features: [
      'Automated login with email and password',
      'Two-factor authentication (2FA) / secret code support',
      'Comprehensive data scraping (balance, repayments, interest)',
      'Secure credential management via environment variables',
      'Robust error handling and cookie consent management',
      'Headless and visible browser modes',
      'Programmatic API for integration',
    ],
  },
  {
    id: 'homelab-media',
    order: 1,
    href: '/projects/homelab-media',
    title: 'Homelab Media Stack',
    description:
      'Fully automated, self-healing Docker media stack with VPN kill switch, cascade restart recovery, and zero-touch container updates.',
    longDescription:
      'A production-grade homelab media stack built on Docker Compose, handling everything from media requests to downloading, extracting, renaming, subtitle fetching, quality management, and streaming — with zero manual intervention after initial setup. All download traffic routes through WireGuard VPN with a firewall kill switch.',
    image: '/images/Homelab-Media.png',
    githubUrl: 'https://github.com/ZisisKostakakis/homelab-media',
    technologies: [
      'Docker Compose',
      'Bash',
      'Python',
      'WireGuard VPN',
      'Gluetun',
      'Plex',
      'Sonarr',
      'Radarr',
      'Prowlarr',
      'qBittorrent',
      'Linux',
    ],
    category: 'Infrastructure',
    date: '2026',
    features: [
      'All download traffic routed through ProtonVPN WireGuard with firewall kill switch',
      'Cascade restart monitor automatically recovers all VPN-dependent services on Gluetun restart',
      'Daily container image update detection with automatic pull and recreate via WUD + webhook',
      'Push notifications via ntfy.sh at every automation stage',
      'Hardlink-based media import — zero extra disk usage while seeding continues',
      'Recyclarr syncs TRaSH Guides quality profiles to Sonarr/Radarr on schedule',
      'Three self-healing layers: Docker healthchecks, Autoheal watchdog, gluetun-monitor cascade restart',
      'cross-seed daemon maximises seeding ratio with zero extra bandwidth',
      'Maintainerr rules automatically clean up stale media from Plex',
      'Timestamped config backups with single-command restore',
    ],
  },
  {
    id: 'stackfordev',
    order: 2,
    href: '/projects/stackfordev',
    title: 'StackForDev',
    description:
      'CLI tool and web app that generates tailored Dockerfiles so developers only need Docker — no language runtimes to install locally.',
    longDescription:
      'A serverless platform that generates custom Dockerfiles for any language and stack. The backend runs on AWS Lambda, the CLI is published on PyPI, and the web UI is built with SvelteKit.',
    image: '/images/StackForDev.png',
    githubUrl: 'https://github.com/ZisisKostakakis/StackForDev',
    liveUrl: 'https://stackfordev.zisiskostakakis.com',
    technologies: [
      'Python',
      'AWS Lambda',
      'AWS API Gateway',
      'AWS S3',
      'AWS ECR',
      'Terraform',
      'SvelteKit',
      'Docker',
      'PyPI',
      'Click',
      'Pydantic',
    ],
    category: 'Full Stack',
    date: '2025',
    features: [
      'Generates Dockerfiles for Python, JavaScript, Go, Rust, and Java with 20+ stack variants',
      'CLI tool published on PyPI (`pip install stackfordev`)',
      'Interactive and non-interactive CLI modes',
      'S3-backed deduplication — identical configs return a cached Dockerfile',
      'SvelteKit web UI for browser-based generation and preview',
      'Serverless backend on AWS Lambda with API Gateway rate limiting',
      'Infrastructure as Code with Terraform Cloud',
    ],
  },
  {
    id: 'property-pal-scraper',
    order: 3,
    href: '/projects/property-pal-scraper',
    title: 'PropertyPal Investment Analyzer',
    description:
      'Scrapy-based web scraper for extracting property listings with AI-powered investment ratings and geocoding analysis.',
    longDescription:
      'A production-grade web scraper built with Scrapy that extracts property listings from PropertyPal.com and provides AI-powered investment analysis using Perplexity API. Features automated geocoding with distance calculations, mortgage payment estimations, and comprehensive data export pipelines with Pydantic validation.',
    image: '/images/Property-Pal-Scraper.png',
    githubUrl: 'https://github.com/ZisisKostakakis/property-pal-scraper',
    technologies: ['Python', 'Scrapy', 'Perplexity API', 'Pydantic', 'Web Scraping', 'Data Pipelines', 'Geocoding'],
    category: 'Automation',
    date: '2026',
    features: [
      'Automated property data extraction with pagination support',
      'AI-powered investment ratings via Perplexity Housing Agent',
      'Geocoding with distance calculations from custom destinations',
      'Interactive CLI with multi-select search functionality',
      'Automated mortgage payment calculations',
      'CSV/JSON export pipelines with Pydantic validation',
      'Ethical scraping with rate limiting and robots.txt compliance',
      'Comprehensive error handling and retry mechanisms',
    ],
  },
];

export const projects: Project[] = [...projectsData].sort((a, b) => {
  return (a.order ?? 999) - (b.order ?? 999);
});

export const getProjectById = cache((id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
});

export const getProjectsByCategory = cache((category: string): Project[] => {
  return projects.filter((project) => project.category === category);
});
