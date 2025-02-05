const { MAIN_EL_MAX_WIDTH } = require('./src/constants');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#171717',
        keystatic: {
          gray: {
            DEFAULT: '#E8E8E8',
            light: '#F8F8F8',
            dark: '#2e2e2e',
          },
          highlight: '#F7DE5B',
          secondary: '#375CDC',
        },
        thinkmill: {
          red: '#ED0000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '7xl': MAIN_EL_MAX_WIDTH,
      },
      screens: {
        '2lg': '68.75rem',
      },
      scale: {
        1: '1',
        '-1': '-1',
      },
      boxShadow: {
        card: '0px 16px 48px 0px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('peer-adjacent', ':merge(.peer) + &'); // adds custom support for adjacent sibling combinator
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes (to not globally override Voussiour input styles)
    }),
  ],
};
