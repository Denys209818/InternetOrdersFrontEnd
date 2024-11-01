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
        btn: ['20px', {
          lineHeight: '20px',
          letterSpacing: '0.8px',
          fontWeight: '600',
        }],
        input: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '400',
        }],
      },
      colors: {
        gray: '#525A63',
        silver_gray: '#E4E7EE',
        disabled: '#9AA5B1',
        red: '#B20508'
      },
      spacing: {
        '100%': '100%',
        '50%': '50%',
        '-100%': '-100%',
        '-110%': '-110%',
        '-70%': '-70%',
        '-50%': '-50%',
        '-30%': '-30%',
        '-40px': '-40px',
        'negative-top': 'calc(100% - 67px)',
        'negative-top-pc': 'calc(100% - 62px)',
        'negative-top-tablet': 'calc(100% - 18px)',
        'negative-top-phone': 'calc(100% - 126px)',
      },
      translate: {
        'negative': 'calc(-100% - 40px)',
        'negative-phone': '-50%',
        'negative-x-eye': 'calc(-100% - 16px)',
        'positive-y-eye': 'calc(50% + 4px)',
      },
      screens: {
        'small-phone': '375px',
        'phone': '480px',
        'tablet': '744px',
        'pc': '1000px',
        'large-pc': '1440px',
      },
    },
  },
  plugins: [],
}

