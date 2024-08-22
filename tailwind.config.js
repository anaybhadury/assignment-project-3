/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color':'#ABEF5F',
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