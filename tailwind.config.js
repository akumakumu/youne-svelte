/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        monojp: ['Noto Serif JP'],
        kosugi: ['Kosugi Maru'],
        mplusr: ['M PLUS Rounded 1c']
      }
    },
  },
  plugins: [],
}

