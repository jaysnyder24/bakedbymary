/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        playfair: ['var(--font-playfair-display)'],
      }
    },
  },
  plugins: [],
}