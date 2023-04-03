/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F7F9',
      },
      translate: {
        '1/2': '50%',
        '-1/2': '-50%',
        '-110': '-110%',
      },
      screens: {
        375: '375px',
        540: '540px',
      },
    },
  },
  plugins: [],
}