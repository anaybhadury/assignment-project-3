/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            clifford: '#da373d',
            'primary-color':'',
          },
            backgroundImage:{
            'hero-bg': "url('')",
          },
            fontFamily: {
            'manrope': "Manrope",
          }
      },
    },
    plugins: [],
  }