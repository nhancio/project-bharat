/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hesa: {
          green: '#2d5016',
          lightGreen: '#5a7c3e',
          sage: '#8ba678',
          cream: '#f5f1e8',
          earth: '#8b6f47',
          blue: '#1e3a5f',
          lightBlue: '#4a7ba7',
          saffron: '#ff9933',
          gray: '#4a5568',
          black: '#1a202c',
          red: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
    },
  },
  plugins: [],
};
