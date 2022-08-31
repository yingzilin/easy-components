<template>
  <el-radio-group v-model="data.val" @change="handleChange">
    <el-radio
      :label="item.value"
      v-for="(item, index) in config.options"
      :key="index"
      :style="config?.type_params?.style ?? ''"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue'
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
console.log('props====>', props)

const data = reactive({
  val: '' as any
})
//双向绑定动态组件的值
const handleChange = (e: any) => {
  $emit('update:value', data.val)
}
watchEffect(() => {
  if (props.value) {
    data.val = props.value
  }
})
</script>
