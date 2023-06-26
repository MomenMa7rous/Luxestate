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
        primary: '#1F373D',
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
}