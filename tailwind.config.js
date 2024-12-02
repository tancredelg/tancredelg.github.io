/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'aleo': 'Aleo',
      'noto': 'Noto Sans',
      'noto-mono': 'Noto Sans Mono',
      'roboto': ['Roboto Flex'],
      'roboto-slab': 'Roboto Slab',
      'roboto-mono': 'Roboto Mono',
      'jetbrains-mono': 'Jetbrains Mono',
      'merriweather': 'Merriweather',
    },
    extend: {
      colors: {
        'lightest': '#ecd5b4',
        'lighter': '#bb9f81',
        'light': '#a08567',
        'dark': '#2d4464',
        'darker': '#203550',
        'darkest': '#172637',
        'aqua': {
          50: '#cff8f2',
          100: '#98f3e5',
          200: '#6be0d3',
          300: '#3dc9b9',
          400: '#249f91',
          500: '#127269',
          600: '#0b4f4d',
          700: '#093d3d',
          800: '#072828',
          850: '#062123',
          900: '#051b1c',
          950: '#051517'
        },
      },
      boxShadow: {
        'inner-sm': [
          '0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.5) inset',
        ],
        'inner-lg': [
          '0 0 1.5rem 0.5rem rgba(0, 0, 0, 0.5) inset',
        ],
      },
      dropShadow: {
        'white-sm': [
          '0 0 0.4rem rgba(255, 255, 255, 0.2)',
        ],
        'white-md': [
          '0 0 0.4rem rgba(255, 255, 255, 0.2)',
          '0 0 0.8rem rgba(255, 255, 255, 0.4)',
        ],
        'white-lg': [
          '0 0 1rem rgba(255, 255, 255, 0.2)',
          '0 0 4rem rgba(255, 255, 255, 0.2)',
          '0 0 8rem rgba(255, 255, 255, 0.2)',
        ],
      },
      animation: {
        blink: 'blink 1.2s linear infinite',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0, 0.9, 0, 1.0)',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0, 0.9, 0, 1.0)',
        'slide-in-down': 'slide-in-down 1s cubic-bezier(0, 0.9, 0, 1.0)'
      },
      
      keyframes: {
        'slide-in-right': {
          '0%': {opacity: '0', transform: 'translateX(-8vw)'},
          '100%': {opacity: '100%', transform: 'translateX(0)'},
        },
        'slide-in-left': {
          '0%': {opacity: '0', transform: 'translateX(8vw)'},
          '100%': {opacity: '100%', transform: 'translateX(0)'},
        },
        'slide-in-down': {
          '0%': {opacity: '0', transform: 'translateY(-8vw)'},
          '100%': {opacity: '100%', transform: 'translateY(0)'},
        },
        'slide-in-up': {
          '0%': {opacity: '0', transform: 'translateY(8vw)'},
          '100%': {opacity: '100%', transform: 'translateY(0)'},
        },
        blink: {
          '0%, 45%, 100%': {opacity: 0},
          '50%, 95%': {opacity: '100%'},
        }
      },
    },
  },
  plugins: [],
}