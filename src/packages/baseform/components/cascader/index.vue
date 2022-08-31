<!--
 * @Date: 2022-06-27 11:20:28
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 16:19:40
 * @FilePath: \basic-components\src\packages\baseform\components\cascader\index.vue
-->
<template>
  <div>
    <el-cascader
      v-model="data.val"
      :options="config?.options"
      :props="config?.data_type"
      @change="handleChange"
      :style="config?.type_params?.style ?? ''"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watchEffect, ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
const $emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: [String, Number, Object, Array],
    default: []
  },
  config: {
    type: Object,
    default: {}
  }
})
console.log('props====>', props)

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
