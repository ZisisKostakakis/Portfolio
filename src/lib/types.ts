// Core Types for Portfolio Website

export interface Project {
  id: string;
  href: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  category?: string;
  date?: string;
  role?: string;
  teamSize?: number;
  duration?: string;
  challenges?: string[];
  features?: string[];
  order?: number; // Explicit display order (lower = first)
}

export interface ProjectDetail extends Project {
  additionalRepos?: { label: string; url: string }[];
  demoVideos?: { title: string; src: string }[];
  screenshots?: { src: string; alt: string; caption?: string }[];
  architectureSections?: { title: string; description: string; mermaid?: string }[];
  pypiUrl?: string;
}

export interface Skill {
  src: string;
  name: string;
  category: SkillCategory;
  invert?: boolean;
}

export type SkillCategory = 'languages' | 'cloud';

export interface SkillSection {
  id: string;
  title: string;
  skills: Omit<Skill, 'category'>[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  color?: string;
  ariaLabel?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location?: string;
  availability?: string;
  yearsOfExperience?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  technologies: string[];
  startDate: string;
  endDate?: string;
  type: 'permanent' | 'contract';
}
