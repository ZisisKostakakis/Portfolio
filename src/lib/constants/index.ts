export const SITE_CONFIG = {
  name: 'Zisis Kostakakis Portfolio',
  url: 'https://www.zisiskostakakis.com',
  description: 'Software Engineer specializing in AWS cloud solutions and modern web development',
  author: 'Zisis Kostakakis',
  keywords: ['Software Engineer', 'AWS', 'Python', 'TypeScript', 'Next.js', 'React', 'Cloud Computing', 'Terraform'],
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
  PROJECTS: {
    CONNECT_5: '/projects/connect-5',
    CAMERA_OCR: '/projects/camera-ocr',
    TRANSPORT_INFO: '/projects/transport-info',
    DATE_CALCULATOR: '/projects/date-calculator',
    STUDENT_LOAN_CHECKER: '/projects/student-loan-checker',
    PROPERTY_PAL_SCRAPER: '/projects/property-pal-scraper',
  },
} as const;
