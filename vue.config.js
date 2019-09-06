module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vueper-slides' : '',
  outputDir: 'www',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
