import { PersonalInfo, SocialLink, NavItem } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  name: 'Zisis Kostakakis',
  title: 'Software Engineer',
  tagline:
    'Backend engineer specialising in Python and AWS — I build cloud-native services, automate infrastructure with Terraform, and ship full-stack products end to end.',
  email: 'business@zisiskostakakis.com',
  location: 'United Kingdom',
  availability: 'Open to opportunities',
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
