/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins'],
        "Montserrat" : ['Montserrat']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', 
          'wave': 'wave 1.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      colors : {
        "putih" : "#F1F4F5",
        "ungu" : "#080C2E",
      "grey" : "#F1F4F5",
      },
      padding :{
        '100': '25rem',
      },
      
    },
    
  },
  plugins: [],
}

