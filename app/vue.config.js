const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 去除打包文件的中的map文件
  // productionSourceMap: false,
  // transpileDependencies: true,
  // devServer: {
  //   host: 'localhost',
  //   port: 8081,
  //   https: false,
  //   hot: false,
  //   proxy: null
  // },
  // 关闭eslint
  lintOnSave: false,

  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        // 后台服务器地址
        target: 'http://gmall-h5-api.atguigu.cn',

        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
})
