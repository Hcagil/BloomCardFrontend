/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        darkgrey: '#212A31',
        grey: '#2E3944',
        darkgreen: '#99b21a',
        green: '#cbe54e',
        white: '#D3D9D4',
        
      },
      width: {
        '40-r': '40rem'
      },

      height: {
        '40-r': '40rem',
        '35-r': '35rem'
      },
    },
    
  },
  
  plugins: [],
}