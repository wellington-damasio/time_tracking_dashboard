/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-darkBlue-400': '#33397A',
        'c-darkBlue-600': '#0E1323',
        'c-darkBlue-500': '#1C204B',
        'c-purple-200': '#BBC0FF',
        'c-purple-300': '#7078C9',
        'c-purple-400': '#5747EA',
        'c-purple-500': '#7335D2',
        'c-purple-700': '#5A1CBB',
        'c-green-400': '#4BCF82',
        'c-green-500': '#29BA66',
        'c-lightBlue-500': '#55C2E6',
        'c-lightBlue-700': '#3F9CBB',
        'c-gray-300': '#d8d8d8',
        'c-orange-500': '#FF8B64',
        'c-orange-600': '#D96C47',
        'c-yellow-400': '#F1C75B',
        'c-yellow-600': '#E6A532',
        'c-lightPink-500': '#FF5E7D',
        'c-pink-500': '#F04667'
      },
      fontFamily: {
        'c-defaultFamily': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}