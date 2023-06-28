module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {
      colors: {
        dark: {
          // 100: '#0d2132',
          // 200: '#0c1d2d'
          100: '#04293A',
          200: '#041C32'
        },
        primary: {
          100: '#0E515E',
          200: '#1F373D'
        },
        secondary: {
          100: '#FFDE59',
          200: '#FFCC01'
        }
      },
      fontFamily: {
        "main": ['Montserrat', 'sans-serif']
      },
      container: {
        center: true,
        padding: '20px'
      }
    },
  },
  darkMode: 'class'
}