/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        accent: {
          blue: {
            400: '#60a5fa',
            300: '#93c5fd',
            200: '#bfdbfe',
          },
          violet: {
            500: '#8b5cf6',
            400: '#a78bfa',
            300: '#c4b5fd',
          }
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyberpunk-grid': 'linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.1) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139,92,246,0.5), 0 0 10px rgba(139,92,246,0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(139,92,246,0.8), 0 0 20px rgba(139,92,246,0.5)' },
        },
      },
    },
  },
  plugins: [],
};