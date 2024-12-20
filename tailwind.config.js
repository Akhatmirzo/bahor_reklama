/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1440px' },

      'xl': { 'max': '1279px' },

      'lg': { 'max': '991px' },

      'md': { 'max': '767px' },

      'sm': { 'max': '479px' },
    },
  },
  plugins: [],
}