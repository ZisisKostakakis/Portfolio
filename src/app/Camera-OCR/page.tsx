import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Camera OCR | Zisis Kostakakis',
  description: 'iOS App that uses OCR to detect text from camera and ML Emotion Detection.',
};

export default function CameraOCR() {
  const project = {
    id: 'camera-ocr',
    href: '/Camera-OCR',
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
      {
        title: 'OCR & Text-to-Speech Demo',
        src: '/videos/CameraOCR-one.mp4',
      },
      {
        title: 'Emotion Detection Demo',
        src: '/videos/CameraOCR-two.mp4',
      },
    ],
  };

  return <ProjectTemplate project={project} />;
}
