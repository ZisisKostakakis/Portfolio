/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Professional Navy Blue palette
          navy: '#1B365D', // Deep Navy Blue (Primary)
          'navy-light': '#2C4A7C',
          'navy-dark': '#0F1F3D',

          // Electric Blue/Cyan accent (replacing gold) - Toned down
          gold: '#0099CC', // Muted Cyan (Accent) - keeping 'gold' name for backwards compatibility
          'gold-light': '#00B8E6',
          'gold-dark': '#007AA3',

          // New electric blue variants - Toned down
          cyan: '#0099CC',
          'cyan-light': '#00B8E6',
          'cyan-dark': '#007AA3',
          electric: '#0099CC',

          // Neutral colors
          charcoal: '#2C3E50', // Dark text
          slate: '#7F8C9D', // Secondary text
          'slate-light': '#A3AEB9',

          // Backgrounds
          gray: '#F8F9FA', // Off-white background
          'gray-light': '#FFFFFF', // Pure white
          'gray-dark': '#E9ECEF', // Light gray

          // Legacy aliases for backwards compatibility
          black: '#2C3E50',
          white: '#FFFFFF',
          'white-soft': '#F8F9FA',
        },
        // Glass-morphism colors
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(44, 62, 80, 0.1)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
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
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #00B8E6 0%, #0099CC 50%, #007AA3 100%)",
        "gradient-cyan": "linear-gradient(135deg, #00B8E6 0%, #0099CC 50%, #007AA3 100%)",
        "gradient-navy": "linear-gradient(135deg, #2C4A7C 0%, #1B365D 50%, #0F1F3D 100%)",
        "gradient-mesh": "radial-gradient(at 40% 20%, rgba(0, 153, 204, 0.2) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(27, 54, 93, 0.3) 0, transparent 50%), radial-gradient(at 80% 50%, rgba(0, 153, 204, 0.15) 0, transparent 50%), radial-gradient(at 0% 100%, rgba(27, 54, 93, 0.2) 0, transparent 50%)",
        // Keep orange for backwards compatibility (now cyan)
        "gradient-orange": "linear-gradient(135deg, #00B8E6 0%, #0099CC 50%, #007AA3 100%)",
      },
      animation: {
        // Existing
        "bounce-slow": "bounce 50s infinite",
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s infinite",

        // New advanced animations
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "rotate-in": "rotateIn 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "blob": "blob 7s infinite",
        "tilt": "tilt 10s infinite linear",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 153, 204, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 153, 204, 0.6), 0 0 40px rgba(0, 153, 204, 0.4)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(27, 54, 93, 0.1), 0 2px 4px -1px rgba(27, 54, 93, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(27, 54, 93, 0.1), 0 4px 6px -2px rgba(27, 54, 93, 0.05)',
        'glow-sm': '0 0 10px rgba(0, 153, 204, 0.3)',
        'glow': '0 0 20px rgba(0, 153, 204, 0.4)',
        'glow-lg': '0 0 30px rgba(0, 153, 204, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 153, 204, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};
