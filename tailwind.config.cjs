/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Rubik']
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(270deg, ${theme('colors.primary.900')}, ${theme('colors.primary.400')})`,
      }),
      colors: {
        'color-cards': '#ffffff',
        transparent: 'transparent',
        primary: {
          900: '#082140',
          700: '#0E2F58',
          600: '#174884',
          500: '#1D579D',
          400: '#2160ad'
        },
        secondary: '#EDF3F8',
        'term-color': '#8FB2C2',
        'semi-secondary': '#D7D7D7'
      }
    },
  },
}