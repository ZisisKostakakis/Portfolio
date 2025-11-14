import { SkillSection } from '@/lib/types';

export const skillSections: SkillSection[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    maxHeight: 'max-h-[500px]',
    skills: [
      { src: '/images/python-logo-only.png', name: 'Python' },
      { src: '/images/icons8-typescript-48.png', name: 'TypeScript' },
      { src: '/images/icons8-java-50.png', name: 'Java' },
      { src: '/images/icons8-c++-48.svg', name: 'C++' },
      { src: '/images/icons8-bash.svg', name: 'Bash' },
      { src: '/images/swift.svg', name: 'Swift' },
      { src: '/images/flutter.svg', name: 'Flutter' },
      { src: '/images/terraform.svg', name: 'Terraform' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    maxHeight: 'max-h-[500px]',
    skills: [
      { src: '/images/icons8-amazon-web-services.svg', name: 'AWS' },
      { src: '/images/icons8-docker.svg', name: 'Docker' },
      { src: '/images/vercel.svg', name: 'Vercel' },
      { src: '/images/kubernetes.svg', name: 'Kubernetes' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    maxHeight: 'max-h-[500px]',
    skills: [
      { src: '/images/icons8-flask.svg', name: 'Flask' },
      { src: '/images/next.svg', name: 'NextJS 13' },
    ],
  },
  {
    id: 'aws',
    title: 'AWS Services',
    maxHeight: 'max-h-[800px]',
    skills: [
      { src: '/images/ec2.svg', name: 'EC2' },
      { src: '/images/lambda.svg', name: 'Lambda' },
      { src: '/images/ebs.svg', name: 'EBS' },
      { src: '/images/ecr.svg', name: 'ECR' },
      { src: '/images/cognito.svg', name: 'Cognito' },
      { src: '/images/cloudwatch.svg', name: 'CloudWatch' },
      { src: '/images/s3.svg', name: 'S3' },
      { src: '/images/dynamodb.svg', name: 'DynamoDB' },
      { src: '/images/iam.svg', name: 'IAM' },
      { src: '/images/api.svg', name: 'API Gateway' },
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
