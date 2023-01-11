/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: "1.5rem",
      center: true,
    },
    extend: {
      colors: {
        primary: "#F6E137"
      },
    },
  },
  plugins: [],
}