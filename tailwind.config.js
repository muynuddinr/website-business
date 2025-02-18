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
          dark: '#0f172a',
        }
      },
    },
  },
  plugins: [],
}