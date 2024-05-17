/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        gray: "#d5d5d5",
        graydarker: "#999999",
        brown: "#a18a4d"
      },
    },
  },
  plugins: [],
};