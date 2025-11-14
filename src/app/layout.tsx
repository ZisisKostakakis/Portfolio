import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata = {
  title: 'Zisis Kostakakis - Full Stack Engineer',
  description:
    'Full Stack Engineer specializing in AWS cloud development with Python and TypeScript. Portfolio showcasing innovative projects and technical expertise.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'AWS',
    'Python',
    'TypeScript',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Zisis Kostakakis' }],
  openGraph: {
    title: 'Zisis Kostakakis - Full Stack Engineer',
    description:
      'Full Stack Engineer specializing in AWS cloud development. View my portfolio of innovative projects.',
    url: 'https://www.zisiskostakakis.com',
    siteName: 'Zisis Kostakakis Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zisis Kostakakis - Full Stack Engineer',
    description:
      'Full Stack Engineer specializing in AWS cloud development. View my portfolio of innovative projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
