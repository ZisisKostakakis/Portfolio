import { Project } from '@/lib/types';

const projectsData: Project[] = [
  {
    id: 'connect-5',
    href: '/Connect-5',
    title: 'Connect 5 Java Game',
    description: 'Java Game with Graphical User Interface and AI Implementation.',
    longDescription:
      'A strategic board game built with Java featuring a custom GUI and intelligent AI opponent. Implements minimax algorithm with alpha-beta pruning for optimal gameplay.',
    githubUrl: 'https://github.com/ZisisKostakakis',
    technologies: ['Java', 'Swing', 'AI/ML'],
    category: 'Game Development',
    date: '2023',
    delay: 'delay-[100ms]',
    features: [
      'Graphical User Interface using Java Swing',
      'AI opponent with minimax algorithm',
      'Alpha-beta pruning optimization',
      'Multiple difficulty levels',
    ],
  },
  {
    id: 'camera-ocr',
    href: '/Camera-OCR',
    title: 'CameraOCR',
    description: 'IOS App that uses OCR to detect text from camera and ML Emotion Detection.',
    longDescription:
      'An iOS application that leverages computer vision and machine learning to extract text from camera images and detect emotions in real-time.',
    githubUrl: 'https://github.com/ZisisKostakakis',
    technologies: ['Swift', 'CoreML', 'Vision', 'OCR', 'Machine Learning'],
    category: 'Mobile Development',
    date: '2023',
    delay: 'delay-[200ms]',
    features: [
      'Real-time OCR text detection',
      'Emotion recognition using CoreML',
      'Camera integration with live preview',
      'Text extraction and processing',
    ],
  },
  {
    id: 'transport-info',
    href: '/Transport-Info',
    title: 'Transport Info',
    description:
      'Full Stack Web App on AWS that uses public transport data to provide information to users.',
    longDescription:
      'A comprehensive full-stack application deployed on AWS infrastructure that aggregates and displays real-time public transportation data to help users plan their journeys.',
    githubUrl: 'https://github.com/ZisisKostakakis',
    technologies: [
      'Python',
      'Flask',
      'AWS Lambda',
      'DynamoDB',
      'API Gateway',
      'S3',
      'CloudWatch',
      'Terraform',
    ],
    category: 'Full Stack',
    date: '2023',
    delay: 'delay-[300ms]',
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
    href: '/Date-Calculator',
    title: 'Date Calculator',
    description:
      'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
    longDescription:
      'A full-stack date calculation tool with a Next.js 15/React 19 frontend and a Flask (Python) backend deployed on AWS Lambda. Perfect for tracking travel days, residency requirements, or any time-based calculations that need to be measured against custom yearly periods. Features include flexible date range management, custom anchor periods, smart overlap merging, visual heatmap visualization, and threshold validation.',
    githubUrl: 'https://github.com/ZisisKostakakis/date-calculator',
    liveUrl: 'https://date-calc.zisiskostakakis.com',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flask',
      'Python',
      'AWS Lambda',
      'AWS API Gateway',
      'Docker',
      'Vercel',
    ],
    category: 'Full Stack',
    date: '2025',
    delay: 'delay-[400ms]',
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
    href: '/Student-Loan-Checker',
    title: 'Student Loan Checker',
    description:
      'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
    longDescription:
      'A Python automation bot built with Playwright that securely logs into the Student Loans Company (SLC) portal to retrieve comprehensive loan information. The bot handles authentication, two-factor authentication, and scrapes detailed loan data including balance, repayments, interest rates, and more. Features secure credential management through environment variables, robust error handling, and support for both headless and visible browser modes.',
    githubUrl: 'https://github.com/ZisisKostakakis/student-loan-checker',
    technologies: [
      'Python',
      'Playwright',
      'Web Scraping',
      'Automation',
      'Environment Variables',
    ],
    category: 'Automation',
    date: '2025',
    delay: 'delay-[500ms]',
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
];

// Sort projects by date in descending order (newest first)
export const projects: Project[] = [...projectsData].sort((a, b) => {
  const dateA = a.date || '0';
  const dateB = b.date || '0';
  return dateB.localeCompare(dateA);
});

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};
