/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        brand: '#0084ff',
        bdbg: '#72b9fc',
        brand2: '#41b883',
        brandHover: '#0066ff',
      },
      fontFamily: {
        Title: ['TheJamsil5Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
