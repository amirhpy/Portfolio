/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fira-400': 'code-regular',
      'fira-500': 'code-medium',
      'fira-600': 'code-semibold',
      'fira-700': 'code-bold'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    screens: {
      // 'sm': '576px',
      // 'md': '768px',
      // 'lg': '992px',
      // 'xl': '1024px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {
      backgroundColor: {
        'background': '#282C33'
      },
      colors: {
        transparent: 'transparent',
        'primary': '#C778DD',
        'gray': '#ABB2BF',
      }
    },
  },
  plugins: [],
}

