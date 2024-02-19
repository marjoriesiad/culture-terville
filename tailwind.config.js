/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        gray: '#4B4A4B'
      }
    },
  },
  plugins: [],
}

