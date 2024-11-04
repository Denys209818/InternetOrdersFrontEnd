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
        'right': "url('/src/images/Right.svg')",
        'backhover': "url('/src/images/Back-hover.svg')",
        'patato': "url('/src/images/Patato.svg')",
        'enter': "url('/src/images/EnterIcon.svg')",
        'hend': "url('/src/images/Hendcheese.svg')",
        'fork': "url('/src/images/Fork.svg')",
        'pizza': "url('/src/images/Pizza.png')",
        'shawarma': "url('/src/images/Shawarma.png')",
        'cakes': "url('/src/images/Cakes.png')",
        'handCheese': "url('/src/images/HandCheese.svg')",
        'chat': "url('/src/images/ChatLi.svg')",
        'chart': "url('/src/images/PieChartLi.svg')",
        'time': "url('/src/images/TimeLi.svg')",
        'plancton': "url('/src/images/Plancton.svg')",
        'new1': "url('/src/images/new1.png')",
        'new2': "url('/src/images/new2.png')",
        'new3': "url('/src/images/new3.png')",
        'new4': "url('/src/images/new4.png')",
        'instagram': "url('/src/images/Instagram.svg')",
      },
      paddingBottom: {
        '40%': '40%',
        '60%': '60%',
        '90%': '90%',
        '100%': '100%',
        '169%': '169%',
        '77%': '77%',
        '154%': '154%',
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
        paragraph: ['24px', {
          lineHeight: '28.8px',
          fontWeight: '300',
        }],
        li: ['32px', {
          lineHeight: '38.4px',
          fontWeight: '500',
          letterSpacing: '-0.03rem'
        }],
        else: ['28px', {
          lineHeight: '38.4px',
          fontWeight: '500',
          letterSpacing: '-0.03rem'
        }],
        headerLess: ['64px', {
          lineHeight: '76.8px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        cardChoice: ['68px', {
          lineHeight: '76.8px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        headerHuge: ['128px', {
          lineHeight: '128px',
          letterSpacing: '-0.05rem',
          fontWeight: '700'
        }],
        descLi: ['16px', {
          lineHeight: '17.8px',
          fontWeight: 600,
        }],
      },
      colors: {
        gray: '#525A63',
        silver_gray: '#E4E7EE',
        disabled: '#9AA5B1',
        red: '#B20508',
        purple: '#9CC2FF',
        shawarma: '#FFE9DE',
        pizza: '#FF8080',
        greyLi: '#616E7C',
      },
      minHeight: {
        'height-w-h': '100%',
        'height-w-h-t': '100%',
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
        '72px': '72px',
        '328px': '328px',
        'negative-top': 'calc(100% - 67px)',
        'negative-top-pc': 'calc(100% - 62px)',
        'negative-top-tablet': 'calc(100% - 18px)',
        'negative-top-phone': 'calc(100% - 126px)',
        'negative-top-fork': 'calc(-50% - 8px)',
        'negative-left-fork': 'calc(-100% - 156px)',
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
      }
    },
  },
  plugins: []
}

