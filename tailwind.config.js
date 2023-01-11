/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: "1.3rem",
      center: true,
    },
    extend: {
      colors: {
        primary: "#F6E137",
        secondary: "#518A4A"
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
}