/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6EE7B7",
        accent: "#60A5FA",
        bg: "#0B1220",
        card: "#0F172A",
      }
    },
  },
  plugins: [],
}
