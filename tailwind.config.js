/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '15rem',
      },
    },
    extend: {
      colors: {
        primary: '#691EE4',
        'primary-500': 'rgba(105, 30, 228, 0.91)',
        secondary: '#DCCCFF',
        'secondary-500': 'rgba(220, 204, 255, 0.85)',
        'body-text': '#594D61'
      }
    },
  },
  plugins: [],
}

