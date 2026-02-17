import { Experience } from '@/lib/types';

export const experiences: Experience[] = [
  {
    id: 'experience-1',
    company: 'Company Name',
    position: 'Software Engineer',
    duration: 'Jan 2024 – Present',
    location: 'United Kingdom',
    description: [
      'Built and maintained cloud-native microservices on AWS using Python and Terraform',
      'Designed CI/CD pipelines with GitHub Actions and Docker for automated deployments',
      'Collaborated with cross-functional teams to deliver features end-to-end',
    ],
    technologies: ['Python', 'AWS', 'Terraform', 'Docker', 'TypeScript'],
    startDate: '2024-01',
  },
  {
    id: 'experience-2',
    company: 'Previous Company',
    position: 'Junior Software Engineer',
    duration: 'Jun 2022 – Dec 2023',
    location: 'United Kingdom',
    description: [
      'Developed RESTful APIs with Flask and integrated with AWS services',
      'Implemented infrastructure as code using Terraform for reproducible deployments',
      'Contributed to frontend features using React and TypeScript',
    ],
    technologies: ['Python', 'Flask', 'AWS Lambda', 'DynamoDB', 'React'],
    startDate: '2022-06',
    endDate: '2023-12',
  },
];
