/*
 * @Author: your name
 * @Date: 2021-12-22 09:38:40
 * @LastEditTime: 2021-12-22 10:18:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-sunday\src\icons\index.js
 */
// TODO 1. 导入所有的svg图标

// TODO 2.1
import SvgIcon from '@/components/SvgIcon'

// TODO 1.1
// webpack 的 api https://webpack.docschina.org/guides/dependency-management/#requirecontext
// 可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。
const svgRequire = require.context('./svg', false, /\.svg$/)

// 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。
// 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标
// 遍历图标，把图标作为 request 参数传入到 require 导入函数中，完成本地 svg 图标的导入
console.log(svgRequire.keys()) // ["./article-create.svg", "./xxx.svg"]
// ['./article-create.svg', './article-ranking.svg', './article.svg', './change-theme.svg', './dashboard.svg', './example.svg', './exit-fullscreen.svg', './eye-open.svg', './eye.svg', './fullscreen.svg', './guide.svg', './hamburger-closed.svg', './hamburger-opened.svg', './international.svg', './introduce.svg', './language.svg', './link.svg', './nested.svg', './password.svg', './permission.svg', './personnel-info.svg', './personnel-manage.svg', './personnel.svg', './reward.svg', './role.svg', './search.svg', './table.svg', './tree.svg', './user.svg']
// ! 我现在是这样理解的，这个文件在 main.js 中调用，相当于遍历所有的 svgIcon 进行引入
svgRequire.keys().forEach((svgIcon) => {
  // console.log('svgRequire', svgRequire) // svgRequire 是一个函数
  /**
   * svgRequire ƒ webpackContext(req) {
   * var id = webpackContextResolve(req);
   * return __webpack_require__(id);
   * }
   */
  // console.log('svgIcon', svgIcon) // svgIcon ./language.svg
  // console.log('调用 svgRequire', svgRequire(svgIcon)) // 这相当于引入，最后返回一个 webpack 的 hash 地址 /img/personnel-info.0f19226a.svg
  // ! 但是之后并不会显示出来，我们还需要使用到 svg-sprite-loader
  svgRequire(svgIcon)
})

// TODO 2. svgIcon的全局注册
// ! 这里做的只是全局注册 SvgIcon 组件。
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
