<template>
  <div class="login-page">
    <div class="login-container">
      <div class="title">用户登录 - {{ loginForm.username }}</div>
      <el-form
        class="login-form"
        ref="form"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <el-form-item prop="username">
          <!-- <el-icon class="svg-container"><avatar /></el-icon> -->
          <el-icon class="svg-container">
            <SvgIcon icon="user"></SvgIcon>
          </el-icon>
          <el-input v-model="loginForm.username" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item prop="password">
          <el-icon class="svg-container">
            <!-- TODO 处理外部图标 -->
            <!-- <span class="svg-container"> -->
            <!-- <SvgIcon icon="https://res.lgdsunday.club/user.svg"></SvgIcon> -->
            <SvgIcon icon="password"></SvgIcon>
            <!-- </span> -->
          </el-icon>
          <el-input placeholder="请输入密码" v-model="loginForm.password" />
          <el-icon class="svg-container show-password">
            <SvgIcon icon="eye"></SvgIcon>
          </el-icon>
        </el-form-item>
      </el-form>

      <el-button type="primary" style="width: 100%" @click="handleLogin"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { checkPassword } from './rule'
// ! 从@element-plus/icons 引入 svg icon
import { Avatar } from '@element-plus/icons'

// import SvgIcon from '@/components/SvgIcon/index.vue'
import SvgIcon from '../../components/SvgIcon/index.vue'
// import SvgIcon from '../../../imooc-admin-main/src/components/SvgIcon/index.vue'
onMounted(() => {
  // setTimeout(() => {
  //   window.location = 'http://localhost:8080/#/?token=223555'
  // }, 2000)
})
const store = useStore()
// TODO 1 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const loginFormRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur', validator: checkPassword }]
})

const handleLogin = () => {
  console.log('handLogin')
  this.$refs.form.validate((valid) => {
    if (valid) {
      store
        .dispatch('user/login', loginForm.value)
        .then((res) => {
          console.log('res', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
    } else {
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #b88aa4;
$light_gray: #eee;
$cursor: #fff;
.login-page {
  min-height: 100%;
  width: 100%;
  background: $bg;
  overflow: hidden;
  .login-container {
    position: relative;
    width: 520px;
    margin: 0 auto;
    padding: 160px 35px 0;
    overflow: hidden;
    .title {
      text-align: center;
      font-size: 26px;
      font-weight: bold;
      color: $cursor;
      margin-bottom: 40px;
    }
    .login-form {
      /* ::v-deep .el-form-item  */
      :deep(.el-form-item) {
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
      }
      /* ::v-deep .el-input  */
      :deep(.el-input) {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
          height: 100%;
          background: transparent;
          border: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          /* 光标颜色 */
          caret-color: $cursor;
        }
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
    &.show-password {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
