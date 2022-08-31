<!--
 * @Date: 2022-06-27 11:20:28
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 16:19:24
 * @FilePath: \basic-components\src\packages\baseform\components\input\index.vue
-->
<template>
  <div>
    <el-input
      :placeholder="config.placeholder ?? `请输入${config.label}`"
      v-model="data.val"
      @input="handleInput"
      :rows="config?.data_type?.rows"
      clearable
      :autosize="
        config?.data_type?.autosize ? config.data_type.autosize : false
      "
      show-word-limit
      :maxlength="config?.data_type?.maxlength ?? ''"
      :type="config?.data_type?.type ?? 'text'"
      :style="config?.type_params?.style ?? ''"
    ></el-input>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue'
const $emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  config: {
    type: Object,
    default: {}
  }
})
console.log('props', props)

const data = reactive({
  val: '' as any
})
const handleInput = (e: any) => {
  $emit('update:value', data.val)
}
watchEffect(() => {
  if (props.value) {
    data.val = props.value
  }
})
</script>

<style lang="scss" scoped></style>
