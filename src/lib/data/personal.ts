import { PersonalInfo, SocialLink, NavItem } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  name: 'Zisis Kostakakis',
  title: 'Software Engineer & Cloud Architect',
  tagline:
    'I build cloud systems in Python and AWS, automate infrastructure with Terraform, lead teams to MVP delivery, and integrate private AI/LLM systems.',
  email: 'business@zisiskostakakis.com',
  location: 'United Kingdom',
  yearsOfExperience: 3,
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zisis-kostakakis-5b85961b7/',
    icon: 'linkedin',
    color: '#0077B5',
    ariaLabel: 'Visit Zisis Kostakakis LinkedIn profile',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ZisisKostakakis',
    icon: 'github',
    color: '#FFFFFF',
    ariaLabel: 'Visit Zisis Kostakakis GitHub profile',
  },
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SITE_CONFIG = {
  name: 'Zisis Kostakakis Portfolio',
  url: 'https://www.zisiskostakakis.com',
  description: 'Software Engineer working with Python, AWS, and web development',
  author: 'Zisis Kostakakis',
  keywords: [
    'Software Engineer',
    'AWS',
    'Python',
    'TypeScript',
    'Next.js',
    'React',
    'Cloud Computing',
    'Terraform',
  ],
} as const;
