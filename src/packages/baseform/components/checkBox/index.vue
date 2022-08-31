<!--
 * @Date: 2022-06-27 11:20:28
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 16:48:00
 * @FilePath: \basic-components\src\packages\baseform\components\checkBox\index.vue
-->
<template>
  <el-checkbox-group v-model="data.val" @change="handleChange">
    <el-checkbox
      v-for="(item, index) in config.options"
      :label="item.value"
      :key="index"
      :style="config?.type_params?.style ?? ''"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { reactive, watchEffect, ref } from 'vue'
const $emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: [String, Number, Object],
    default: ''
  },
  config: {
    type: Object,
    default: {}
  }
})

const data = reactive({
  val: [] as any
})
//双向绑定动态组件的值
const handleChange = (e: any) => {
  console.log('e==>', e)

  $emit('update:value', data.val)
}
watchEffect(() => {
  if (props.value) {
    data.val = props.value
  }
})
</script>
