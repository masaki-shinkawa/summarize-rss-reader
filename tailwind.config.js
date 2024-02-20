/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
