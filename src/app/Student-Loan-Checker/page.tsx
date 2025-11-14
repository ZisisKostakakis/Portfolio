import ProjectTemplate from '@/components/project-template';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Student Loan Checker | Zisis Kostakakis',
  description:
    'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
};

export default function StudentLoanChecker() {
  const project = {
    id: 'student-loan-checker',
    href: '/Student-Loan-Checker',
    title: 'Student Loan Checker',
    description:
      'Automated Python bot using Playwright to log into the Student Loans Company portal and retrieve loan balance information.',
    longDescription: `Student Loan Checker is an automated Python bot built with Playwright that securely logs into the Student Loans Company (SLC) portal to retrieve comprehensive loan information. This tool automates the tedious process of manually checking loan balances and provides programmatic access to loan data.

The bot handles the complete authentication flow including email/password login, cookie consent management, and two-factor authentication using secret codes. It navigates through the SLC portal, extracts detailed loan information including current balance, salary repayments, direct repayments, interest added, and current interest rates. All credentials are securely managed through environment variables, ensuring no sensitive information is hardcoded in the source code.

Built with Python 3.11+ and Playwright, the bot features robust error handling, automatic cookie consent management, and support for both headless and visible browser modes. The codebase is well-structured with a clean class-based architecture, making it easy to extend and customize. The bot can be used both as a standalone script and as an importable module for integration into larger applications.

Security is a top priority - the bot uses environment variables for all sensitive credentials, includes comprehensive .gitignore rules to prevent accidental credential leaks, and follows best practices for secure credential management. The project includes detailed documentation, example environment files, and clear instructions for setup and usage.`,
    githubUrl: 'https://github.com/ZisisKostakakis/student-loan-checker',
    technologies: [
      'Python',
      'Playwright',
      'Web Scraping',
      'Browser Automation',
      'Environment Variables',
      'python-dotenv',
    ],
    category: 'Automation',
    date: '2025',
    features: [
      'Automated login with email and password authentication',
      'Two-factor authentication (2FA) / secret code support',
      'Comprehensive data scraping - extracts balance, salary repayments, direct repayments, interest added, and interest rates',
      'Secure credential management via environment variables (.env file)',
      'Robust error handling with detailed error messages',
      'Automatic cookie consent management',
      'Headless and visible browser modes for flexibility',
      'Programmatic API - can be imported and used as a module',
      'Clean class-based architecture for easy extension',
      'Comprehensive documentation and setup instructions',
    ],
  };

  return <ProjectTemplate project={project} />;
}
