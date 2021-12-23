/*
 * @Author: your name
 * @Date: 2021-12-20 14:37:05
 * @LastEditTime: 2021-12-23 17:46:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-sunday\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import store from '../store'
// Storage
// import Storage from '../utils/storage'

// const localStorage = new Storage()
// 白名单
const whiteList = ['/login', '/404']
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // 每次访问这么一长大串，我们可以定义在 getters 里面
  if (store.getters.token) {
    // 1. 用户已经登陆，则不允许进入 login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 2. 用户未登录，只允许进入 login
    // 用户不登录能访问的页面也蛮多的，我们可以添加 白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
