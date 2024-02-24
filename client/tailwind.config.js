/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary:{... colors.green, DEFAULT: colors.green[600] }
      }
    },
  },
  plugins: [],
}

