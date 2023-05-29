/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'purple-50': '#faf5ff',
      'purple-100': '#9575CD',
      'purple-300': '#7e5bef',
      'purple-950': '#2e1065',
      'white': '#fff',
      'gray': '#B0BEC5',
    },
    extend: {},
  },
  plugins: [],
}

