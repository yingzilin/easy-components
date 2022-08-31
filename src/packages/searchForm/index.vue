<!--
 * @Date: 2022-06-24 17:53:38
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-06-24 17:53:47
 * @FilePath: \basic-components\src\packages\searchForm\index.vue
-->
<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-row :gutter="20">
      <slot name="form" :data="formInline"></slot>
    </el-row>
    <el-collapse-transition>
      <el-row :gutter="20" v-if="state.opened">
        <slot name="more" :data="formInline"></slot>
      </el-row>
    </el-collapse-transition>
    <el-row>
      <el-form-item class="searchForm-elFormItem-btnBox">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">清除条件</el-button>
        <div v-if="showMore" class="m-l-10px">
          <el-button
            type="primary"
            :icon="ArrowDownBold"
            text
            v-if="!state.opened"
            @click="handleClick"
          >
            展开
          </el-button>
          <el-button
            type="primary"
            :icon="ArrowUpBold"
            text
            v-else
            @click="handleClick"
          >
            收起
          </el-button>
        </div>
      </el-form-item>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'BSearchForm',
  inheritAttrs: false
})
</script>
<script lang="ts" setup>
const state = reactive({
  opened: false
})
const props = defineProps({
  params: {
    type: Object as any,
    default: {}
  },
  showMore: {
    type: Boolean,
    default: false
  }
})
let formInline = {}

watchEffect(() => {
  if (props) {
    formInline = props.params
  }
})
const $emit = defineEmits(['onSubmit', 'resetForm'])
const onSubmit = () => {
  console.log('submit!', formInline)
  $emit('onSubmit', formInline)
}
const resetForm = () => {
  $emit('resetForm', formInline)
}
const handleClick = () => {
  state.opened = !state.opened
}
</script>
<style lang="scss">
.searchForm-elFormItem-btnBox.el-form-item {
  margin-bottom: 0 !important;
}
</style>
