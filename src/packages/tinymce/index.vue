<!--
 * @Date: 2022-06-14 16:56:49
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-06-27 11:48:42
 * @FilePath: \basic-components\src\packages\tinymce\index.vue
-->
<template>
  <div>
    <vue3-tinymce
      v-model="state.content"
      :setting="state.setting"
      @change="handleChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'BTinymce',
  inheritAttrs: false
})
</script>
<script setup lang="ts">
// @ts-ignore
import Vue3Tinymce from '@jsdawn/vue3-tinymce'
const props = defineProps({
  height: {
    type: Number,
    default: () => 500
  },
  // 上传接口
  action: {
    type: String,
    default: ''
  },
  // oss文件地址
  fileUrl: {
    type: String,
    default: ''
  },
  // 额外携带请求参数
  params: {
    type: Object,
    default: {}
  }
})
const state = reactive({
  content: '',
  // editor 配置项
  setting: {
    menubar: false,
    height: props.height,
    toolbar:
      'bold italic underline h1 h2 blockquote codesample numlist bullist link image | removeformat fullscreen',
    plugins: 'codesample link image table lists fullscreen',
    toolbar_mode: 'sliding',
    nonbreaking_force_tab: true,
    link_title: false,
    default_link_target: '_blank',
    content_style: 'body{font-size: 16px}',
    // 自定义 图片上传模式
    custom_images_upload: true,
    images_upload_url: props.action,
    custom_images_upload_callback: (res: any) => props.fileUrl + res.result,
    custom_images_upload_param: props.params,
    language: 'zh_CN',
    language_url:
      'https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js'
  }
})
const $emit = defineEmits(['handleChange'])
const handleChange = (e: any) => {
  $emit('handleChange', e)
}
</script>

<style scoped></style>
