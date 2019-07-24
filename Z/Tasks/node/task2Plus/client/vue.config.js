module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.103.112.154:9090/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
