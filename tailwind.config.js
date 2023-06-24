/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        'tablet-sm': '580px',
        'tablet': '940px',
        'laptop': '1270px',
        'desktop': '1550px',
      },
    },
    
  },
  plugins: [],
}

