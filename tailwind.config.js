
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
      },
      fontFamily: {
        sans: ['Fellix', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(0)' },
        },
        close: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-120%)' },
        },
        'zoom-in': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-in': 'slide-in .5s ease-in-out',
        'zoom-in': 'zoom-in .2s ease-in-out',
      },
      height: {
        140: '140%',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-font-inter')],
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
};
