/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.vitepress/**/*.{js,ts,vue,md,scss,css}'],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          /*50: '#f3e7e7',*/
          50 : '#7d877f',
          100: '#ecc9c7',
          200: '#e2a8a7',
          300: '#d38988',
          400: '#c56b6d',
          500: '#b6494f',
         /* 600: '#a41f35',*/
          600: '#751729',
        },
      },
    },
  },
  plugins: [],
}
