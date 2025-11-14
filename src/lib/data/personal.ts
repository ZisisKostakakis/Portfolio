import { PersonalInfo, SocialLink, NavItem } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  name: 'Zisis Kostakakis',
  title: 'Full Stack Engineer',
  tagline: 'Passionate about building innovative solutions and turning complex problems into elegant applications',
  email: 'kostakakiszisis@gmail.com',
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
    color: '#181717',
    ariaLabel: 'Visit Zisis Kostakakis GitHub profile',
  },
  {
    name: 'Email',
    url: 'mailto:kostakakiszisis@gmail.com',
    icon: 'email',
    color: '#EA4335',
    ariaLabel: 'Send email to Zisis Kostakakis',
  },
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/About' },
  { label: 'Contact', href: '/Contact' },
];
