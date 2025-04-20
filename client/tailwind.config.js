/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#4338ca",
        accent: "#1e40af",
        light: "#f8fafc",
        dark: "#020617"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Charter', 'serif'],
      },
    },
  },
  plugins: [],
} 