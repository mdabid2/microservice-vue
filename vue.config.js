module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vueper-slides' : ''
  ,outputDir: 'www'
  ,configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
  ,runtimeCompiler: true //"Using Render function" You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
}
