/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          p2s: ['"Press Start 2P"', 'cursive'],
          poppins: ['Poppins', 'sans-serif'],
          tilt: ['"Tilt Warp"', 'sans-serif'], 
     },
    }
  },
  plugins: [],
}
