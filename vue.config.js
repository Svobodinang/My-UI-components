module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/main.scss";
            `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/My-UI-components/'
    : '/',
  chainWebpack: (config) => {
    // Pug Loader
    config.module
      .rule('webgl')
      .test(/\.(frag|vert)/)
      .use('webgl-loader')
      .loader('webgl-loader')
      .end();
  },
}