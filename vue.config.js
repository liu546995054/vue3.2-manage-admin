const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '192.168.3.77',
    port: 9800,
    proxy: {

      '/koa': {
        // target: 'https://lianghj.top:8888/api/private/v1/',
        target: 'http://192.168.3.77:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/koa': ''
        }
      },
      '/java2api': {
        // target: 'https://lianghj.top:8888/api/private/v1/',
        target: 'http://192.168.1.222:28000/',
        changeOrigin: true,
        pathRewrite: {
          '^/java2api': ''
        }
      },
    }
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    // config 为 webpack 配置对象
    // config.module 表示创建一个具名规则，以后用来修改规则
    config.module
      // 规则
      .rule('svg')
      // 忽略
      .exclude.add(resolve('src/icons'))
      // 结束
      .end()
    // config.module 表示创建一个具名规则，以后用来修改规则
    config.module
      // 规则
      .rule('icons')
      // 正则，解析 .svg 格式文件
      .test(/\.svg$/)
      // 解析的文件
      .include.add(resolve('src/icons'))
      // 结束
      .end()
      // 新增了一个解析的loader
      .use('svg-sprite-loader')
      // 具体的loader
      .loader('svg-sprite-loader')
      // loader 的配置
      .options({
        symbolId: 'icon-[name]'
      })
      // 结束
      .end()
    config
      .plugin('ignore')
      .use(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/))
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        // 8版本用prependData:additionalData
        prependData: `
          @import "@/styles/variables.module.scss";  // scss文件地址
          @import "@/styles/mixin.scss";     // scss文件地址
        `
      }
    }
  }
})
