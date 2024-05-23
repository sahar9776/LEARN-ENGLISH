/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#0c1a1a',
        'secondary':'#037272',
      },
      rotate:{
        '21':'21deg',
      },
    },
  },
  plugins: [],
}