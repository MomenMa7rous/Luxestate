module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#1F373D',
        secondary: '#FFCC01'
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