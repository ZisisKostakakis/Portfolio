import { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data/personal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How this site handles the personal data you submit.',
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen px-4 pt-32 pb-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-accent">legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-faint">Last updated: 15 July 2026</p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Who I am</h2>
            <p className="mt-3">
              This is the personal portfolio website of {personalInfo.name}, based in the{' '}
              {personalInfo.location}. For anything related to this policy, email{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">
                {personalInfo.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">What data is collected</h2>
            <p className="mt-3">
              The only personal data this site collects is what you choose to submit through the
              contact form: your name, email address, subject, and message. There are no user
              accounts and no marketing lists.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">How it is used</h2>
            <p className="mt-3">
              Contact form submissions are delivered to my inbox as an email via{' '}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Resend
              </a>
              , an email delivery service. I use your details solely to read and reply to your
              message. They are never sold or shared for marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Cookies and analytics</h2>
            <p className="mt-3">
              This site does not set cookies and does not run analytics or tracking scripts. The
              site is hosted on Vercel, which may keep standard server logs (such as IP address
              and browser user agent) for security and operational purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Retention and your rights</h2>
            <p className="mt-3">
              Messages you send are kept in my mailbox as normal correspondence. Under UK GDPR you
              can ask me at any time to access, correct, or delete the personal data I hold about
              you by emailing{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">
                {personalInfo.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">External links</h2>
            <p className="mt-3">
              This site links to external services such as GitHub, LinkedIn, and the live demos of
              my projects. Those sites have their own privacy policies and I am not responsible
              for their practices.
            </p>
          </section>
        </div>

        <div className="mt-14">
          <Link href="/" className="font-mono text-sm text-accent hover:underline">
            back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
