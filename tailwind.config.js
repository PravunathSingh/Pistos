module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5.5rem',
        '3xl': '6.5rem',
      },
    },

    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Roboto'],
      },
      borderWidth: {
        0.2: '.2px',
      },
      colors: {
        primary: '#191D21',
        secondary: '#2F343A',
        cta: '#B2DB5B',
        'brand-text': '#FC6011',
        rating: '#FFFF00',
        'fb-blue': '#367FC0',
        'google-red': '#DD4B39',
        border: '#FEBD00',
        'cta-dark': '#8FCE0B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
