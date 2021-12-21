import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Storage
// import Storage from '../utils/storage'

// const localStorage = new Storage()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  // let token = localStorage.getItem('token')
  // const pathToken = to.fullPath.split('?token=')[1]

  // // 如果第一步没有获取到 token，就让 token 等于 pathToken
  // if (pathToken) {
  //   if (!token || token !== pathToken) {
  //     token = pathToken
  //     localStorage.setItem('token', token)
  //   }
  // }
  // console.log('token', token)
  // console.log('to', to)

  // if (!token && to.path !== '/login') {
  //   next('/login')
  // } else {
  //   next()
  // }

  next()
})

export default router
