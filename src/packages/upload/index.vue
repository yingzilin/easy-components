<!--
 * @Date: 2022-06-16 18:06:54
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-06-24 17:27:35
 * @FilePath: \basic-components\src\packages\upload\index.vue
-->
<template>
  <el-upload
    v-bind="$attrs"
    list-type="picture-card"
    :limit="limit"
    :file-list="data.fileList"
    :on-success="handleSuccess"
    :on-change="handleChange"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :before-upload="beforeUpload"
     :on-exceed="handleOnExceed"
  >
    <div class="flex-col fiex-center !text-14px !text-gray-300 upload-box">
      <el-icon>
        <Plus />
      </el-icon>
      <span class="mt-5px" v-if="limit">{{`最多上传${limit}张图片`}}</span>
      <slot name="tips"></slot>
    </div>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img  style="width:100%"  :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BUpload',
  inheritAttrs: false
})
</script>
<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { ref, reactive, watchEffect } from 'vue'
import { ElMessage, UploadFile, UploadFiles, UploadRawFile } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import utils from './utils'
const props = defineProps({
  fileList: {
    default: []
  },
  // 限制单张图片的文件存储大小最大值(kb)
  maxSize: {
    type: Number,
    default: 0
  },
  // 限定图片分辨率宽度值(px)
  screenWidth: {
    type: Number,
    default: 0
  },
  // 限定图片分辨率高度值(px)
  screenHeight: {
    type: Number,
    default: 0
  },
  // 限制图片分辨率宽度最大值(px)
  maxScreenWidth: {
    type: Number,
    default: 0
  },
  // 限制图片分辨率高度最大值(px)
  maxScreenHeight: {
    type: Number,
    default: 0
  },
  // 限制上传数量
  limit: {
    type: Number,
    default: null
  }
})

const data = reactive({
  fileList: [] as any
})

watchEffect(() => {
  if (props.fileList.length) {
    data.fileList = props.fileList
  }
})
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const $emit = defineEmits(['update:fileList'])
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

const handleSuccess = (res: any, file: UploadFile, fileList: any) => {
  $emit('update:fileList', data.fileList)
}
const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {}
const handleOnExceed = (files: File[], uploadFiles: UploadFiles) => {
  if (data.fileList.length >= props?.limit) {
    ElMessage.info(`最多上传${props?.limit}张图片`)
  }
}
const beforeUpload = (rawFile: UploadRawFile) => {
  if (props.maxSize) {
    return utils.validateSize(rawFile, props.maxSize)
  } else if (
    props.screenWidth ||
    props.screenHeight ||
    props.maxScreenWidth ||
    props.maxScreenHeight
  ) {
    // 校验图片分辨率尺寸
    return utils.validateImgScreen(
      rawFile,
      props.screenWidth,
      props.screenHeight,
      props.maxScreenWidth,
      props.maxScreenHeight
    )
  } else {
    return true
  }
}
</script>
<style lang="scss">
.upload-box {
  span {
    @apply mt-5px;
  }
}

</style>
