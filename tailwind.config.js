/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include your React components here
  ],
  theme: {
    extend: {
      colors: {
        gradient : "linear-gradient(90deg, #f0cb94 30%, #e9ba77 50%, #fce4c2 100%)"

      }
    },
  },
  plugins: [],
};
