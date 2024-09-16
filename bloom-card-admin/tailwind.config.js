/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      
      colors: {
        darkgrey: '#1e1e1e',
        bordergrey: '#484f56',
        grey: '#2a2a2a',
        darkgreen: '#99b21a',
        green: '#def241',
        white: '#D3D9D4',
        
      },
      width: {
        '40-r': '40rem'
      },

      height: {
        '40-r': '40rem',
        '35-r': '35rem'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #def241 0%, #99b21a 50%, #1e1e1e 100%)',
      },
      borderImage: {
        'custom-gradient': 'linear-gradient(90deg, #def241 0%, #99b21a 50%, #1e1e1e 100%)',
      },
    },
    
  },
  
  plugins: [],
}