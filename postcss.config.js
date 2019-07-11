module.exports = {
  plugins: {
    'postcss-preset-env': {
      'browserslist': [
        'last 5 version',
        '> 5%',
        'maintained node versions',
        'not dead'
      ]
    },
  }
}