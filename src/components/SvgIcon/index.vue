<template>
  <div class="svg-icon">
    <!-- 外部图标和内部图标只能同时展示一个 -->
    <!-- 展示外部图标 -->
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      :class="className"
    ></div>
    <!-- 展示内部图标 -->
    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
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
// TODO 3. 内部图标 添加前缀
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped>
/* 内部图标 */
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/* 外部图标 */
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
