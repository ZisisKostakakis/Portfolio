import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Date Calculator | Zisis Kostakakis',
  description:
    'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
};

export default function DateCalculator() {
  const project = {
    id: 'date-calculator',
    href: '/Date-Calculator',
    title: 'Date Calculator',
    description:
      'Modern web application for calculating and tracking days across custom date ranges with configurable anchor periods.',
    longDescription: `Date Calculator is a full-stack web application designed for calculating and tracking days across custom date ranges with configurable anchor periods. This tool is perfect for tracking travel days, residency requirements, or any time-based calculations that need to be measured against custom yearly periods.

The frontend is built with Next.js 15 and React 19, featuring an intuitive interface that allows users to add multiple date ranges using a modern date picker, configure custom anchor dates (e.g., September 17 to September 16), and automatically merge overlapping ranges for accurate calculations. The built-in visual heatmap provides a clear visualization of which days fall within each period, making it easy to understand complex date calculations at a glance. Key frontend features include client-side state management with React hooks, localStorage persistence for saving calculation sessions, and a beautiful dark-themed UI built with Tailwind CSS. The application is fully responsive and works seamlessly on both desktop and mobile devices.

The backend is a RESTful API built with Flask (Python) and deployed as a serverless AWS Lambda function using container images. The API handles complex date calculations, overlap merging, heatmap generation, and session management. It's exposed through AWS API Gateway with CORS support, enabling seamless communication between the frontend and backend. The backend logic handles complex edge cases including leap years, period boundaries across year transitions, and invalid date formats. The smart overlap merging algorithm ensures accurate day counts even when date ranges span multiple periods or overlap in various ways.

The frontend is containerized with Docker and deployed to Vercel, while the backend is deployed as a containerized Lambda function using AWS CloudFormation/SAM templates.`,
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
    date: '2024',
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
  };

  return <ProjectTemplate project={project} />;
}
