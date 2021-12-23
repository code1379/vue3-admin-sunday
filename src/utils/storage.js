/*
 * @Author: your name
 * @Date: 2021-12-21 09:11:38
 * @LastEditTime: 2021-12-23 17:22:19
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-admin-sunday\src\utils\storage.js
 */
export const setItem = (key, value) => {
  // value 分为两种情况
  // 1. 基本数据类型
  // 2. 复杂数据类型
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  window.localStorage.setItem(key, value)
}

export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

export const reomoveAllItem = () => {
  window.localStorage.clear()
}
