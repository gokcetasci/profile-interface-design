const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e74b3c',
        secondary: '#313131',
        hoverred: '#eb6659',
        white: '#ffffff',
        black: '#000000',
        basecolor: '#212529',
        mainbgcolor: '#F3F8FB',
        footerbuttonbg: '#0346c8',
        fbghover: '#033caa',
        fiborder: '#dee2e6',
        fifocus: '#0D6EFD',
        pdicon: '#0f2557'
      },
    },
    screens: {
      'xs': '379px',
      ...defaultTheme.screens,

    },
  },
  plugins: [],
};
