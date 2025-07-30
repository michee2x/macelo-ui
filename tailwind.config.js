/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        batman: ['"Batman Forever"', 'sans-serif'],
        batmanmini: ['"Batman Forever normal"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

