/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#022c1a',
        },
        brand: {
          dark:    '#042a18',  // deepest forest
          DEFAULT: '#0a4d2e',  // primary emerald
          mid:     '#0f6b3f',  // mid green
          light:   '#16a34a',  // accent green
          muted:   '#4ade80',  // light accent
        },
        slate: {
          925: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
