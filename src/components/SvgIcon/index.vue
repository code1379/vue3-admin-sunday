<template>
  <div class="svg-icon">
    <!-- 外部图标和内部图标只能同时展示一个 -->
    <!-- 展示外部图标 -->
    <!-- 展示内部图标 -->
  </div>
</template>

<script setup>
/**
 * 我们要知道展示的路径是什么
 */
import { defineProps, computed } from 'vue'
import { isExternal as external } from '@/utils/validate.js'

const props = defineProps({
  // icon 图标。
  icon: { type: String, required: true },
  // 图标类名
  className: { type: String, default: '' }
})

// 定义一些基本的计算属性，控制展示那些
// TODO 1. 判断当前图标是否为外部图标
const isExternal = computed(() => {
  // 判断当前是否为 外部资源
  return external(props.icon)
})
// TODO 2. 外部图标样式
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%;`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%;`
  }
})
// TODO 3. 内部图标
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped>
</style>
