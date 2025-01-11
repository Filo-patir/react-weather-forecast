/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        "green":"#4CBB17",
        "light-gray":"#D9D9D9",
        "dark-gray":"#444444",
        "darker-gray":"#373636",
      },
      backgroundImage:{
        "light-gradient":"linear-gradient(140deg, #fff, #373636)",
        "dark-gradient":"linear-gradient(140deg, #383838, #9e9e9e)"
      }
    },
  },
  plugins: [],
}

