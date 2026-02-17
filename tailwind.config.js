/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A0A0A',
          'navy-light': '#111111',
          'navy-dark': '#060606',

          gold: '#7C3AED',
          'gold-light': '#8B5CF6',
          'gold-dark': '#6D28D9',

          charcoal: '#E5E7EB',
          slate: '#9CA3AF',
          'slate-light': '#D1D5DB',

          gray: '#111827',
          'gray-light': '#1F2937',
          'gray-dark': '#374151',

          black: '#0A0A0A',
          white: '#FFFFFF',
          'white-soft': '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        100: '25rem',
        128: '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
        'gradient-violet': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
        'gradient-navy': 'linear-gradient(135deg, #111111 0%, #0A0A0A 50%, #060606 100%)',
        'gradient-mesh':
          'radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.15) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0, transparent 50%), radial-gradient(at 80% 50%, rgba(109, 40, 217, 0.1) 0, transparent 50%), radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.08) 0, transparent 50%)',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'glow-sm': '0 0 10px rgba(124, 58, 237, 0.3)',
        glow: '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 30px rgba(124, 58, 237, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(124, 58, 237, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [],
};
