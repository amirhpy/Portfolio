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

