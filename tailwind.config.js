/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#3b82f6', // blue-500
          dark: '#1e40af', // blue-800
        },
        accent: {
          DEFAULT: '#64748b', // slate-500
          light: '#94a3b8', // slate-400
          dark: '#475569', // slate-600
        },
        neutral: {
          light: '#334155', // slate-700
          DEFAULT: '#1e293b', // slate-800
          dark: '#0f172a', // slate-900
        },
        background: '#0f172a', // slate-900
        foreground: '#f1f5f9', // slate-100
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
