/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      accent: "#D1EE6B",
      "bg-light": "var(--clr-bg-light)",
      "bg-dark": " var(--clr-bg-dark)",
      "card-dark": "#1F1F1F",
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
      montserrat: "Montserrat, sans-serif",
    },
    extend: {},
  },
  plugins: [],
}
