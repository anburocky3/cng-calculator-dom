/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkpurple": "#481380"
      },
      fontFamily: {
        'roboto': "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],  
}

