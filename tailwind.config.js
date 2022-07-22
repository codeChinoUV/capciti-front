/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#ED8E22',
      primaryDark: '#c97329',
      primaryLight: '#e88f4e',
      primaryDropShadow: '#EA7C69',
      accent: '#FF7CA3',
      accentBlue: '#65B0F6',
      accentOrange: '#FFB572',
      red: '#e54949',
      redLight: '#cb5454',
      secondary: '#9288E0',
      darkLine: '#393C49',
      darkBg1: '#252836',
      darkBg2: '#1F1D2B',
      formBG: '#2D303E',
      white: '#FFFFFF',
      black: '#000000',
      textLight: '#ABBBC2'
    },
    extend: {},
  },
  plugins: [],
}
