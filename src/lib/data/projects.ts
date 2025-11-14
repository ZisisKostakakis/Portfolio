import { Project } from '@/lib/types';

export const projects: Project[] = [
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
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};
