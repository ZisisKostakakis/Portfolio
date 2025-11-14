import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Transport Info | Zisis Kostakakis',
  description:
    'Full Stack Web App on AWS that uses public transport data to provide information to users.',
};

export default function TransportInfo() {
  const project = {
    id: 'transport-info',
    href: '/Transport-Info',
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
      {
        label: 'Backend Repository',
        url: 'https://github.com/ZisisKostakakis/Web-app-python',
      },
    ],
    screenshots: [
      {
        src: '/images/Transport-Info.png',
        alt: 'Transport Info Website Screenshot',
        caption: 'Live Application',
      },
    ],
  };

  return <ProjectTemplate project={project} />;
}
