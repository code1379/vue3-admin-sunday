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
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
// TODO 2. svgIcon的全局注册
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
