<!--
 * @Date: 2022-06-27 11:20:28
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 16:20:57
 * @FilePath: \basic-components\src\packages\baseform\components\select\index.vue
-->
<template>
  <div>
    <!-- //v-model双向绑定动态组件的值 -->
    <el-select
      v-model="data.val"
      @change="handleInput"
      clearable
      :multiple="config?.data_type?.multiple ?? false"
      :placeholder="config?.placeholder ?? `请选择${config.label}`"
      :style="config?.type_params?.style ?? ''"
    >
      <el-option
        v-for="(item, index) in config.options"
        :label="item.label ?? item"
        :value="item.value ?? item"
        :key="index"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue'
const $emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: [String, Number, Object, Array],
    default: null
  },
  config: {
    type: [Object],
    default: {}
  }
})
const data = reactive({
  val: [] as any
})
console.log('props', props)

//双向绑定动态组件的值
const handleInput = (e: any) => {
  console.log('e', e)
  $emit('update:value', data.val)
}
watchEffect(() => {
  if (props.value) {
    data.val = props.value
  }
})
</script>

<style lang="scss" scoped></style>
<style>
/* 解决el-select，el-option层级问题 */
.el-select__popper.el-popper {
  z-index: 9999 !important;
}
</style>
