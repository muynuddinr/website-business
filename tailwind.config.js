/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          dark: '#ffffff',
        },
        secondary: {
          DEFAULT: '#64748b',
          dark: '#94a3b8',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0A1929', // Deep blue dark background
        },
        'blue-dark': {
          50: '#E6F0FF',
          100: '#B3D1FF',
          200: '#80B3FF',
          300: '#4D94FF',
          400: '#1A75FF',
          500: '#0052CC',
          600: '#003D99',
          700: '#002966',
          800: '#001433',
          900: '#000A1A',
        }
      },
    },
  },
  plugins: [],
}