<!--
 * @Date: 2022-06-27 11:20:28
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-26 11:52:31
 * @FilePath: \basic-components\src\packages\baseform\components\datePicker\index.vue
-->
<template>
  <el-config-provider :locale="locale">
    <div>
      <el-date-picker
        v-model="data.val"
        :type="config?.type_params?.type ?? 'daterange'"
        :placeholder="config?.placeholder ?? `请选择${config.label}}`"
        :start-placeholder="config?.type_params?.startPlaceholder ?? '开始时间'"
        :end-placeholder="config?.type_params?.endPlaceholder ?? ' 结束时间'"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        @change="handleChange"
        v-if="config?.time_limit ?? false"
        :style="config?.type_params?.style ?? ''"
      />
      <el-date-picker
        @change="handleChange"
        v-model="data.val"
        :type="config?.type_params?.type ?? 'date'"
        :placeholder="config?.placeholder ?? `请选择${config.label}`"
        :format="
          config?.type_params?.type === 'week'
            ? ''
            : config?.type_params?.type === 'month'
            ? 'YYYY-MM'
            : config?.type_params?.type === 'year'
            ? 'YYYY'
            : 'YYYY-MM-DD'
        "
        value-format="YYYY-MM-DD"
        v-else
        :style="config?.type_params?.style ?? ''"
      />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { reactive, watchEffect, ref } from 'vue'
const $emit = defineEmits(['update:value'])
const locale = ref(zhCn)
const props = defineProps({
  config: {
    type: Object,
    default: () => {}
  },
  value: {
    default: ''
  }
})
const handleChange = (e: any) => {
  $emit('update:value', data.val)
}
watchEffect(() => {
  if (props.value) {
    data.val = props.value
  }
})
const data = reactive({
  val: ''
})
</script>

<style scoped></style>
