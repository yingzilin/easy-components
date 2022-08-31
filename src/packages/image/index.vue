<!--
 * @Date: 2022-06-16 14:17:00
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-26 10:53:16
 * @FilePath: \basic-components\src\packages\image\index.vue
-->
<template>
  <div>
    <el-image v-bind="$attrs" :fit="fit" :loading="loading" lazy :alt="alt">
      <!-- 占位内容 -->
      <template #placeholder>
        <div class="image-slot">
          Loading
          <span class="dot">...</span>
        </div>
      </template>
      <!-- 加载失败 -->
      <template #error>
        <div class="image-slot">加载失败</div>
      </template>
    </el-image>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BImg',
  inheritAttrs: false
})
</script>
<script lang="ts" setup>
const props = defineProps({
  fit: {
    type: String,
    default: 'cover'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  alt: {
    type: String,
    default: '...加载中'
  }
})
</script>

<style scoped>
.image-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  background: var(--el-fill-color-light);
}

.dot {
  overflow: hidden;
  animation: dot 2s infinite steps(3, start);
}
</style>
