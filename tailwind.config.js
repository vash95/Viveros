/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2f6b3f',
        secondary: '#6e8a3d',
        earth: '#9a7b4f',
        soft: '#f4f7f2',
      },
      boxShadow: {
        card: '0 10px 30px rgba(20, 45, 24, 0.12)',
      },
    },
  },
  plugins: [],
};
