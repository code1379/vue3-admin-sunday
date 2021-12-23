/*
 * @Author: your name
 * @Date: 2021-12-23 11:22:13
 * @LastEditTime: 2021-12-23 17:47:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-sunday\src\store\modules\user.js
 */
import md5 from 'md5'
import { login } from '@/api/sys'
import { TOKEN } from '@/constant'
import { setItem, getItem } from '@/utils/storage'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    // 返回 Promise
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            console.log('actions', data)
            this.commit('user/setToken', data.token)
            router.push('/')
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
