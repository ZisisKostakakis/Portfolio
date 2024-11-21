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
          black: '#000000',
          navy: '#000000',
          orange: '#FCA311',
          gray: '#E5E5E5',
          white: '#FFFFFF',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-slow": "bounce 50s infinite",
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(20, 33, 61, 0.1), 0 2px 4px -1px rgba(20, 33, 61, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(20, 33, 61, 0.1), 0 4px 6px -2px rgba(20, 33, 61, 0.05)',
      }
    },
  },
  plugins: [],
};
