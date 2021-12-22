/*
 * @Author: your name
 * @Date: 2021-12-22 10:37:30
 * @LastEditTime: 2021-12-22 10:56:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-sunday\vue.config.js
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      // .tap((options) => {
      //   // 修改它的选项...
      //   options.symbolId = 'icon-[name]'
      //   return options
      // })
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
