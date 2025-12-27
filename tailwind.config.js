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
        sans: ['Inter', 'sans-serif'],
        // Membuat font baru bernama 'display' menggunakan Outfit untuk Judul
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
