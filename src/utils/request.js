/*
 * @Author: your name
 * @Date: 2021-12-23 11:09:14
 * @LastEditTime: 2021-12-23 14:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-sunday\src\utils\request.js
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

instance.interceptors.response.use(
  (res) => {
    const { success, code, data, message } = res.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default instance
