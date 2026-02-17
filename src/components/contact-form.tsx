'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      reset();

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Input
        label="Subject"
        placeholder="Project inquiry"
        error={errors.subject?.message}
        {...register('subject')}
      />

      <Textarea
        label="Message"
        placeholder="Tell me about your project or just say hi!"
        rows={6}
        error={errors.message?.message}
        {...register('message')}
      />

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full sm:w-auto"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm mt-1 text-green-400/80">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          <p className="font-medium">Oops! Something went wrong.</p>
          <p className="text-sm mt-1 text-red-400/80">
            Please try again or contact me directly via email.
          </p>
        </div>
      )}
    </form>
  );
}
