<!--
 * @Date: 2022-06-16 14:18:12
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 10:43:14
 * @FilePath: \basic-components\src\packages\baseform\index.vue
-->
<template>
  <el-form ref="ruleFormRef" :model="formData" v-bind="$attrs">
    <template v-for="(item, index) in data.items" :key="index">
      <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules">
        <div :style="item.style ?? { width: '100%' }">
          <!-- //v-model双向绑定动态组件的值 -->
          <component
            v-model:value="formData[item.prop]"
            :is="item.type ? `com-${item.type}` : 'com-text'"
            :config="item"
          ></component>
        </div>
      </el-form-item>
    </template>
    <template v-if="button?.length">
      <el-form-item>
        <el-button
          v-for="btnItem in button"
          :key="btnItem.key"
          :type="btnItem.type"
          @click="
            () => {
              if (btnItem.key === 'submit') {
                submitForm(ruleFormRef, btnItem)
                return false
              }
              if (btnItem.key === 'cancel') {
                resetForm(ruleFormRef, btnItem)
                return false
              }
              btnItem.callback && btnItem.callback(btnItem)
            }
          "
        >
          {{ btnItem.label }}
        </el-button>
      </el-form-item>
    </template>
  </el-form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const modules: any = {}
const files = import.meta.globEager('./components/*/index.vue')
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    const keys = key.split('/')
    const name = keys[2]
    modules[`com-${name}`] = files[key].default
  }
}
export default defineComponent({
  name: 'BForm',
  inheritAttrs: false,
  components: {
    ...modules
  }
})
</script>
<script lang="ts" setup>
import { FormInstance } from 'element-plus'
import { onBeforeMount, reactive, ref } from 'vue'
import createRules from './createRules'
const ruleFormRef = ref<FormInstance>()
const props = defineProps({
  //表单配置数据
  formItem: {
    type: Array as any,
    required: true
  },
  //表单绑定数据
  formData: {
    type: Object,
    required: true
  },
  button: {
    type: Array as any,
    default: []
  }
})
onBeforeMount(() => {
  data.items = createRules(props.formItem)
})
const data = reactive({
  items: [] as any
})

const submitForm = async (
  formEl: FormInstance | undefined | any,
  option: any
) => {
  // console.log('e====>', option)
  if (!formEl) return
  await formEl.validate((valid: any) => {
    console.log('valid', valid)
    option.callback && option.callback(valid)
  })
}
const resetForm = (formEl: FormInstance | undefined, option: any) => {
  if (!formEl) return
  formEl.resetFields()
  option.callback && option.callback()
}
</script>
