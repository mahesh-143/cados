/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      white : "#FFFFFF",
      black : "#000000",
      accent : "#D1EE6B",
      "bg-light": "#FAF9EF",
      "bg-dark" : "#1C1C1C",
      "card-dark" : "1F1F1F",
    },
    fontFamily : {
      poppins : "Poppins, sans-serif",
    },
    extend: {},
  },
  plugins: [],
}
