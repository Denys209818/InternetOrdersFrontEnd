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
      borderColor: ['hover'],
      backgroundImage: {
        'back': "url('/src/images/Back.svg')",
        'right': "url('/src/images/Right.svg')",
        'backhover': "url('/src/images/Back-hover.svg')",
        'patato': "url('/src/images/Patato.svg')",
        'enter': "url('/src/images/EnterIcon.svg')",
        'hend': "url('/src/images/Hendcheese.svg')",
        'fork': "url('/src/images/Fork.svg')",
        'forkwhite': "url('/src/images/ForkWhite.svg')",
        'pizza': "url('/src/images/Pizza.png')",
        'shawarma': "url('/src/images/Shawarma.png')",
        'drinks': "url('/src/images/Drinks.png')",
        'free': "url('/src/images/Free.png')",
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
        'telegram': "url('/src/images/Telegram.svg')",
        'viber': "url('/src/images/Viber.svg')",
        'instagramwhite': "url('/src/images/InstagramWhite.svg')",
        'telegramwhite': "url('/src/images/TelegramWhite.svg')",
        'viberwhite': "url('/src/images/ViberWhite.svg')",
        'cooker': "url('/src/images/Cooker.svg')",
        'arrowDropDown': "url('/src/images/Arrow_drop_down.svg')",
        'vertel': "url('/src/images/Vertel.svg')",
        'checkpoint': "url('/src/images/CheckPoint.svg')",
        'planctonNotFound': "url('/src/images/PlanctonNotFound.svg')",
        'loader': "url('/src/images/Loader.svg')",
        'close': "url('/src/images/closeIcon.svg')",
        'menu': "url('/src/images/Menu.svg')",
        'trash': "url('/src/images/Trash.svg')",
        'minus': "url('/src/images/Minus.svg')",
        'plus': "url('/src/images/Plus.svg')",
        'close_square': "url('/src/images/Close_square.svg')",
        'plate': "url('/src/images/Plate.svg')",
        'clock_fill': "url('/src/images/Clock_fill.svg')",
        'creditCard': "url('/src/images/CreditCard.svg')",
      },
      paddingBottom: {
        '40%': '40%',
        '60%': '60%',
        '90%': '90%',
        '100%': '100%',
        '169%': '169%',
        '77%': '77%',
        '154%': '154%',
        '152.5%': '152.5%',
      },
      fontSize: {
        orderTitle: ['32px', {
          lineHeight: '38.4px',
          fontWeight: '500'
        }],
        orderTitlePhone: ['24px', {
          lineHeight: '28.8px',
          fontWeight: '500',
          letterSpacing:'-0.48px'
        }],
        orderAuthTitle: ['32px', {
          lineHeight: '38.4px',
          fontWeight: '600'
        }],
        orderAuthDesc: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '500'
        }],
        orderAuthDescPhone: ['14px', {
          lineHeight: '15.4px',
          fontWeight: '500'
        }],
        orderAuthLine: ['24px', {
          lineHeight: '28.8px',
          fontWeight: '400'
        }],
        orderAuthLinePhone: ['18px', {
          lineHeight: '21.6px',
          fontWeight: '400'
        }],
        orderAuthFormTitle: ['32px', {
          lineHeight: '38.4px',
          fontWeight: '500',
          letterSpacing: '-0.48px'
        }],
        orderAuthFormTitlePhone: ['24px', {
          lineHeight: '28.8px',
          fontWeight: '500',
          letterSpacing: '-0.48px'
        }],
        orderListTitle: ['24px', {
          lineHeight: '26.4px',
          fontWeight: '700',
        }],
        orderListTitlePhone: ['18px', {
          lineHeight: '19.8px',
          fontWeight: '700',
        }],
        orderListPhone: ['18px', {
          lineHeight: '19.8px',
          fontWeight: '700',
        }],
        orderListPrice: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '700',
        }],
        orderListPricePhone: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '700',
        }],
        cartTitle: [
          '24px', {
            lineHeight: '26.4px',
            fontWeight: '700',
          }
        ],
        cartTitlePhone: [
          '18px', {
            lineHeight: '19.8px',
            fontWeight: '700',
          }
        ],
        cartMainTitle: [
          '32px', {
            lineHeight: '38.4px',
            fontWeight: '500',
            letterSpacing: '-0.48px'
          }
        ],
        cartMainTitlePhone: [
          '24px', {
            lineHeight: '28.8px',
            fontWeight: '500',
            letterSpacing: '-0.48px'
          }
        ],
        cartText: [
          '16px', {
            lineHeight: '17.6px',
            fontWeight: '600',
          }
        ],
        cartTextPhone: [
          '14px', {
            lineHeight: '15.4px',
            fontWeight: '600',
          }
        ],
        cartPriceText: [
          '16px', {
            lineHeight: '17.6px',
            fontWeight: '700',
          }
        ],
        cartCountText: [
          '24px', {
            lineHeight: '32px',
            fontWeight: '400',
          }
        ],
        cartSumText: [
          '24px', {
            lineHeight: '26.4px',
            fontWeight: '700',
          }
        ],
        asideMenu: ['15px', {
          lineHeight: '15px',
          fontWeight: '500',
          letterSpacing: '0.8px',
        }],
        notFoundPreTitle: [
          '48px', {
            lineHeight: '57.6px',
            fontWeight: '700',
            letterSpacing: '-0.8px'
          }
        ],
        notFoundPreSmall: [
          '32px', {
            lineHeight: '38.4px',
            fontWeight: '700',
            letterSpacing: '-0.8px'
          }
        ],
        notFoundTitle: [
          '128px',
          {
            lineHeight: '128px',
            fontWeight: '700',
            letterSpacing: '-4.8px'
          }
        ],
        notFoundTitlePC: [
          '84px',
          {
            lineHeight: '84px',
            fontWeight: '700',
            letterSpacing: '-4.8px'
          }
        ],
        notFoundTitleTablet: [
          '80px',
          {
            lineHeight: '84px',
            fontWeight: '700',
            letterSpacing: '-4.8px'
          }
        ],
        notFoundTitleSmall: [
          '56px',
          {
            lineHeight: '67.2px',
            fontWeight: '700',
            letterSpacing: '-0.8px'
          }
        ],
        errorTitle: ['300px', {
          lineHeight: '300px',
          fontWeight: '700',
          letterSpacing: '-0.05px'
        }],
        errorTitlePC: ['200px', {
          lineHeight: '200px',
          fontWeight: '700',
          letterSpacing: '-0.05px'
        }],
        errorTitleSmall: [
          '150px', {
            lineHeight: '150px',
            fontWeight: '700',
            letterSpacing: '-0.05px'
          }
        ],
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
        required: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '500',
        }],
        cook: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '600',
        }],
        cardProp: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '700',
        }],
        cardPropPhone: ['14px', {
          lineHeight: '15.4px',
          fontWeight: '700',
        }],
        cardPropBiggerPC: ['18px', {
          lineHeight: '21.6px',
          fontWeight: '400',
        }],
        cardPropPC: ['14px', {
          lineHeight: '15.4px',
          fontWeight: '500',
        }],
        cardPrice: ['21px', {
          lineHeight: '23.1px',
          fontWeight: '700',
        }],
        cardPricePC: ['16px', {
          lineHeight: '17.6px',
          fontWeight: '700',
        }],
        paragraph: ['24px', {
          lineHeight: '28.8px',
          fontWeight: '400',
        }],
        paragraphPhone: ['18px', {
          lineHeight: '21.6px',
          fontWeight: '400',
        }],
        list: ['24px', {
          lineHeight: '26.4px',
          fontWeight: '700',
        }],
        cardTitle: ['24px', {
          lineHeight: '26.4px',
          fontWeight: '700',
        }],
        cardTitlePC: [
          '18px', {
            lineHeight: '19.8px',
            fontWeight: '700'
          }
        ],
        menuTitle: [
          '18px', {
            lineHeight: '19.8px',
            fontWeight: '700'
          }
        ],
        menuTitlePhone: [
          '16px', {
            lineHeight: '18.7px',
            fontWeight: '700'
          }
        ],
        menuTitlePC: [
          '32px', {
            lineHeight: '35.2px',
            fontWeight: '700'
          }
        ],
        paragraphMain: ['20px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        footerP: ['24px', {
          lineHeight: '28.8px',
          fontWeight: '400',
        }],
        footerText: ['24px', {
          lineHeight: '33.6px',
          fontWeight: '700',
          letterSpacing: '-0.05rem'
        }],
        li: ['32px', {
          lineHeight: '38.4px',
          fontWeight: '500',
          letterSpacing: '-0.03rem'
        }],
        lismall: ['20px', {
          lineHeight: '24px',
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
        headerLessMain: ['48px', {
          lineHeight: '57.6px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        headerLessTablet: ['32px', {
          lineHeight: '38.4px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        cardChoice: ['68px', {
          lineHeight: '76.8px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        cardChoiceMain: ['63px', {
          lineHeight: '75.6px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        cardChoiceTablet: ['48px', {
          lineHeight: '57.6px',
          letterSpacing: '-0.03rem',
          fontWeight: '700'
        }],
        headerHuge: ['118px', {
          lineHeight: '118px',
          letterSpacing: '-0.05rem',
          fontWeight: '700'
        }],
        headerHugeMain: ['84px', {
          lineHeight: '84px',
          letterSpacing: '-0.05rem',
          fontWeight: '700'
        }],
        headerHugeTablet: ['63px', {
          lineHeight: '76.8px',
          letterSpacing: '-0.05rem',
          fontWeight: '700'
        }],
        headerHugePhone: ['48px', {
          lineHeight: '57.6px',
          letterSpacing: '-0.05rem',
          fontWeight: '700'
        }],
        descLi: ['16px', {
          lineHeight: '17.8px',
          fontWeight: 400,
        }],
      },
      colors: {
        gray: '#525A63',
        custom_yellow: '#FFB040',
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
        'height-error-h': '646px',
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
        'cart-height': 'calc(100% - 56px)',
        'cart-content-height': 'calc(100% - 118px)',
        'aside-height': 'calc(100% - 48px)',
        'negative-top': 'calc(100% - 67px)',
        'negative-notfound': 'calc(-100% - 64px)',
        'negative-x-notfound': 'calc(-100% - 40px)',
        'negative-x-notfoundpc': 'calc(-100% - 24px)',
        'negative-notfoundpc': 'calc(-100% - 11px)',
        'negative-top-pc': 'calc(100% - 62px)',
        'negative-top-tablet': 'calc(100% - 18px)',
        'negative-top-phone': 'calc(100% - 126px)',
        'negative-top-fork': 'calc(-50% - 46px)',
        'negative-top-fork-tablet': 'calc(-50% - 16px)',
        'negative-top-phonefork': 'calc(-100% - 38.4px)',
        'negative-top-smallphonefork': 'calc(-100% - 90px)',
        'negative-left-fork': 'calc(-100% - 156px)',
        'negative-left-fork-main': 'calc(-100% - 105px)',
        'negative-left-fork-tablet': 'calc(-100% - 16px)',
        'negative-right-forkwhite': 'calc(-100% - 40px)',
        'negative-right-forkwhite-tablet': 'calc(-100% - 56px)',
        'negative-right-forkwhite-bottom': 'calc(-100% - 56px)',
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
    keyframes: {
      scale: {
        '0%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
        '50%': { transform: 'translate(-50%, -50%) scale(1.5) rotate(180deg)' },
        '100%': { transform: 'translate(-50%, -50%) scale(1) rotate(360deg)' },
      },
      move: {
        '0%':  {transform: 'translateX(0)'},
        '100%':  {transform: 'translateX(-100)'},
      },     
      moveDown: {
        '0%':  {transform: 'translateX(-100%)'},
        '100%':  {transform: 'translateX(0)'},
      },     
    },
    animation: {
      scalest: 'scale 2s ease-in-out infinite',
      moving: 'move 0.5s ease-in-out',
      closing: 'moveDown 0.5s ease-in-out',
    },
  },
  plugins: []
}

