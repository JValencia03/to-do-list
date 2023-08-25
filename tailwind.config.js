/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        tasks: 'repeat(auto-fill, minmax(15rem, 1fr))'
      }
    }
  },
  plugins: []
}
