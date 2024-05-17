/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        mygray: "#d5d5d5",
        mygraydarker: "#999999",
        brown: "#a18a4d"
      },
    },
  },
  plugins: [],
};