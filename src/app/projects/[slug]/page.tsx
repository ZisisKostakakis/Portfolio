import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/project-detail';
import { projectDetails, orderedSlugs } from '@/lib/data/project-details';

export const revalidate = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (!detail) return { title: 'Project Not Found' };
  return {
    title: detail.title,
    description: detail.metaDescription,
    openGraph: {
      title: detail.title,
      description: detail.metaDescription,
      images: detail.project.image ? [detail.project.image] : undefined,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (!detail) notFound();

  const index = orderedSlugs.indexOf(slug);
  const prevSlug = index > 0 ? orderedSlugs[index - 1] : undefined;
  const nextSlug = index < orderedSlugs.length - 1 ? orderedSlugs[index + 1] : undefined;

  return (
    <ProjectDetailPage
      project={detail.project}
      prev={
        prevSlug
          ? { title: projectDetails[prevSlug].project.title, href: `/projects/${prevSlug}` }
          : undefined
      }
      next={
        nextSlug
          ? { title: projectDetails[nextSlug].project.title, href: `/projects/${nextSlug}` }
          : undefined
      }
    />
  );
}
