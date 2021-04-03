module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/movie-vue3/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
};
