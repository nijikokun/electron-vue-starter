module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/electron/background.js'
    }
  },

  pages: {
    index: {
      entry: 'src/renderer/main.js',
      template: 'public/index.html'
    },
  }
}