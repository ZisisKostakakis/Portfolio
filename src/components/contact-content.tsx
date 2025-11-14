'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data/personal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact-form';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactContent() {
  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    // You could add a toast notification here
    alert('Email copied to clipboard!');
  };

  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-primary-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-black mb-6">
            Let&apos;s <span className="text-gradient bg-gradient-orange bg-[length:200%_100%] animate-gradient">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-navy/70 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-black mb-2">
                Send a Message
              </h2>
              <p className="text-primary-navy/70 mb-6">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </Card>
          </motion.div>

          {/* Right Column - Contact Info & Social Links */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Direct Email Card */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 hover:shadow-glow transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-primary-navy mb-1">Email</h3>
                    <p className="text-sm text-primary-black break-all mb-3">
                      {personalInfo.email}
                    </p>
                    <Button variant="ghost" size="sm" onClick={copyEmail} className="text-xs">
                      Copy Email
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Location Card */}
            {personalInfo.location && (
              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-navy/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-navy"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-navy mb-1">Location</h3>
                      <p className="text-sm text-primary-black">{personalInfo.location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Availability Card */}
            {personalInfo.availability && (
              <motion.div variants={itemVariants}>
                <Card className="p-6 bg-gradient-to-br from-primary-orange/10 to-primary-orange/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-orange"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-black mb-1">
                        Availability
                      </h3>
                      <p className="text-sm text-primary-navy">{personalInfo.availability}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Social Links Card */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-primary-black mb-4">Connect with me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-gray-light transition-colors duration-300 group"
                      aria-label={social.ariaLabel}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${social.color}15` }}
                      >
                        {social.name === 'LinkedIn' && (
                          <svg className="w-5 h-5" style={{ color: social.color }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {social.name === 'GitHub' && (
                          <svg className="w-5 h-5" style={{ color: social.color }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                          </svg>
                        )}
                        {social.name === 'Email' && (
                          <svg className="w-5 h-5" style={{ color: social.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium text-primary-black group-hover:text-primary-orange transition-colors duration-300">
                        {social.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
