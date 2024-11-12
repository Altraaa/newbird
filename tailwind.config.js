/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public//*.{html,js}'],
    darkMode: 'class',
    plugins: [
      require('postcss-apply')()
    ],
    theme: {
      container: {
        center: true,
        padding: '2px'
      },
      extend: {
        colors: {
          'dark': '#0f172a',
          'primary': '#f97316',
          'secondary': '#475569',
          'coffee': '#f4a261',
        },
        fontFamily: {
          'inter': 'inter'
        },
        screens: {
          '2xl': '1320px'
        },
        fontWeight:{
          'sbold':'900'
        }
      },
    },
    plugins: [],
  }