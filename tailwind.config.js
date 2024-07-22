/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#9CDFD2',
          '200': '#88C7BB',
          '300': '#74AFA4',
          '400': '#60978D',
          '500': '#38785F',
          '600': '#306A56',
          '700': '#285C4D',
          '800': '#204E44',
          '900': '#18403B'
        }
        ,
        secondary: {
          '100': '#FFEFC4',
          '200': '#FFE49C',
          '300': '#FFD874',
          '400': '#FFCC4C',
          '500': '#FDB813',
          '600': '#E6A411',
          '700': '#CC900F',
          '800': '#B37C0D',
          '900': '#99680B'
        }

      }
    }
  },
  plugins: []
};