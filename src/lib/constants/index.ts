// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: 'Zisis Kostakakis Portfolio',
  url: 'https://www.zisiskostakakis.com',
  description: 'Full Stack Engineer specializing in AWS cloud solutions and modern web development',
  author: 'Zisis Kostakakis',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'AWS',
    'Python',
    'TypeScript',
    'Next.js',
    'React',
    'Cloud Computing',
  ],
} as const;

export const ANIMATION_DELAYS = {
  SHORT: 100,
  MEDIUM: 200,
  LONG: 300,
  EXTRA_LONG: 400,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/About',
  CONTACT: '/Contact',
  PROJECTS: {
    CONNECT_5: '/Connect-5',
    CAMERA_OCR: '/Camera-OCR',
    TRANSPORT_INFO: '/Transport-Info',
  },
} as const;
