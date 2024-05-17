/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'card-background': 'hsl(244, 38%, 16%)',
        'accent': 'hsl(277, 64%, 61%)',
        'white': 'hsl(0, 0%, 100%)',
        'paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'stats': 'hsla(0, 0%, 100%, 0.6)',
      },

      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
        lexend_deca: ['"Lexend Deca"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

