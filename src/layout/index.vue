<template>
  <div class="layout">
    <el-container>
      <Sidebar />
      <el-container class="main-container">
        <NavBar />
        <AppMain />
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar/index.vue'
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: tomato;
  .el-container {
    background: #ccc;
    height: 100%;
    overflow: hidden;
    &.main-container {
      flex-direction: column;
    }
  }
}
</style>
