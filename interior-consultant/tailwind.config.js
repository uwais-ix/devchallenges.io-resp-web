/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#181719'
      },
      fontFamily: {
        'monserrat': ['Montserrat', 'sans-serif'],
        'crimsonPro': ['Crimson Pro', 'serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
