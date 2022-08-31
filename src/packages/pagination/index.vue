<!--
 * @Date: 2022-06-27 10:39:23
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-06-27 11:15:25
 * @FilePath: \basic-components\src\packages\pagination\index.vue
-->
<template>
  <el-pagination
    v-bind="$attrs"
    :page-sizes="pageSize"
    :layout="layout"
    :total="total"
    @size-change="sizeChange"
    @current-change="currentChange"
  ></el-pagination>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BPagination',
  inheritAttrs: false
})
</script>
<script lang="ts" setup>
defineProps({
  layout: {
    type: String,
    default: ' total, sizes, prev, pager, next, jumper ,'
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Array as any,
    default: () => [10, 20, 30, 50, 100]
  }
})
const emit = defineEmits(['sizeChange', 'currentChange'])
const sizeChange = (val: number) => {
  console.log(`${val} 当前条数`)
  emit('sizeChange', val)
}
const currentChange = (val: number) => {
  console.log(`页面更改: ${val}`)
  emit('currentChange', val)
}
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
