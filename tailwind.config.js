/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'oswald': ['Oswald'],
      'literata': ['Literata'],
      'lato': ['Lato', 'serif'],
    },
    extend: {
      backgroundImage: {
        'back': "url('/src/images/Back.svg')",
        'patato': "url('/src/images/Patato.svg')",
        'enter': "url('/src/images/EnterIcon.svg')",
        'hend': "url('/src/images/Hendcheese.svg')",
      },
      paddingBottom: {
        '40%': '40%',
        '60%': '60%',
        '90%': '90%',
        '100%': '100%',
        '169%': '169%',
        '77%': '77%',
      },
      fontSize: {
        menu: ['20px', '20px'],
      },
      colors: {
        gray: '#525A63',
        silver_gray: '#E4E7EE',
        disabled: '#9AA5B1',
        red: '#B20508'
      },
      spacing: {
        '100%': '100%',
        '-100%': '-100%',
        '-110%': '-110%',
        '-70%': '-70%',
        '-50%': '-50%',
        '-30%': '-30%',
        '-40px': '-40px',
        'negative-top': 'calc(100% - 67px)'
      },
      translate: {
        'negative': 'calc(-100% - 40px)',
      },
    },
  },
  plugins: [],
}

