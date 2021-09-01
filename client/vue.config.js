module.exports = {
  devServer: {
    proxy: {
      '^/notes': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
}
