import { SkillSection } from '@/lib/types';

export const skillSections: SkillSection[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { src: '/images/python-logo-only.png', name: 'Python' },
      { src: '/images/icons8-typescript-48.png', name: 'TypeScript' },
      { src: '/images/icons8-java-50.svg', name: 'Java' },
      { src: '/images/icons8-c++-48.svg', name: 'C++' },
      { src: '/images/icons8-bash.svg', name: 'Bash' },
      { src: '/images/swift.svg', name: 'Swift', invert: true },
      { src: '/images/flutter.svg', name: 'Flutter' },
      { src: '/images/terraform.svg', name: 'Terraform' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    skills: [
      { src: '/images/icons8-amazon-web-services.svg', name: 'AWS' },
      { src: '/images/icons8-docker.svg', name: 'Docker' },
      { src: '/images/vercel.svg', name: 'Vercel' },
      { src: '/images/kubernetes.svg', name: 'Kubernetes' },
      { src: '/images/hcp.svg', name: 'HCP Cloud' },
      { src: '/images/proxmox.svg', name: 'Proxmox' },
    ],
  },
];

export const getAllSkills = () => {
  return skillSections.flatMap((section) =>
    section.skills.map((skill) => ({
      ...skill,
      category: section.id,
    }))
  );
};

export const getSkillsByCategory = (category: string) => {
  const section = skillSections.find((s) => s.id === category);
  return section ? section.skills : [];
};
