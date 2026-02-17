import { ImageResponse } from 'next/og';
import { projectDetails } from './page';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const detail = projectDetails[slug];

  const title = detail?.title ?? 'Project | Zisis Kostakakis';
  const description = detail?.metaDescription ?? 'Software Engineer Portfolio';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            color: '#FCA311',
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Zisis Kostakakis
        </div>
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          {title.replace(' | Zisis Kostakakis', '')}
        </div>
        <div
          style={{
            color: '#9CA3AF',
            fontSize: 24,
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          {description}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 80,
            color: '#FCA311',
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          zisiskostakakis.com
        </div>
      </div>
    ),
    size
  );
}
