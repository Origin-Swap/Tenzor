/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mengatur 'sans' default menjadi Inter
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
