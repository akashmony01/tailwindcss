module.exports = {
  purge: {
    enabled: true,
    content: ['index.html']
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        grandRoyal: ['Grand Royal'],
        goldplay: ['Goldplay'],
      },
      colors: {
        'bgColor': '#FFF9E4',
        'primary': '#121212',
        'secondery': '#368F8B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
