<!--
 * @Date: 2022-06-16 18:06:54
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 17:44:07
 * @FilePath: \basic-components\src\packages\baseform\components\upload\index.vue
-->
<template>
  <el-upload
    v-bind="$attrs"
    :action="config?.type_params?.action ?? ''"
    list-type="picture-card"
    :limit="config?.type_params?.limit"
    :file-list="data.fileList"
    :on-success="handleSuccess"
    :on-change="handleChange"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :before-upload="beforeUpload"
    :on-exceed="handleOnExceed"
  >
    <div class="upload-box">
      <el-icon>
        <Plus />
      </el-icon>
      <span v-if="config?.type_params?.limit">
        {{ `最多上传${config?.type_params?.limit}张图片` }}
      </span>
      <slot name="tips"></slot>
    </div>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img class="dialog-img" :src="dialogImageUrl" alt="Preview Image" />
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
import utils from '../../utils/upload'
const props = defineProps({
  config: {
    type: Object,
    default: () => {}
  },
  value: {
    default: () => ''
  }
})
// const props = defineProps({
//   fileList: {
//     default: [],
//   },
//   // 限制单张图片的文件存储大小最大值(kb)
//   maxSize: {
//     type: Number,
//     default: 0,
//   },
//   // 限定图片分辨率宽度值(px)
//   screenWidth: {
//     type: Number,
//     default: 0,
//   },
//   // 限定图片分辨率高度值(px)
//   screenHeight: {
//     type: Number,
//     default: 0,
//   },
//   // 限制图片分辨率宽度最大值(px)
//   maxScreenWidth: {
//     type: Number,
//     default: 0,
//   },
//   // 限制图片分辨率高度最大值(px)
//   maxScreenHeight: {
//     type: Number,
//     default: 0,
//   },
//   // 限制上传数量
//   limit: {
//     type: Number,
//     default: 0,
//   },
// })

const data = reactive({
  fileList: [] as any
})

watchEffect(() => {
  if (props.value) {
    data.fileList = props.value
  }
})
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const $emit = defineEmits(['update:value'])
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

const handleSuccess = (res: any, file: UploadFile, fileList: any) => {
  $emit('update:value', data.fileList)
}
const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // console.log('handleChange',uploadFile,uploadFiles);
}
const beforeUpload = (rawFile: UploadRawFile) => {
  if (props.config?.type_params?.maxSize) {
    return utils.validateSize(rawFile, props.config?.type_params?.maxSize)
  } else if (
    props.config?.type_params?.screenWidth ||
    props.config?.type_params?.screenHeight ||
    props.config?.type_params?.maxScreenWidth ||
    props.config?.type_params?.maxScreenHeight
  ) {
    // 校验图片分辨率尺寸
    return utils.validateImgScreen(
      rawFile,
      props.config?.type_params?.screenWidth,
      props.config?.type_params?.screenHeight,
      props.config?.type_params?.maxScreenWidth,
      props.config?.type_params?.maxScreenHeight
    )
  } else {
    return true
  }
}

const handleOnExceed = (files: File[], uploadFiles: UploadFiles) => {
  if (data.fileList.length >= props.config?.type_params?.limit) {
    ElMessage.info(`最多上传${props.config?.type_params?.limit}张图片`)
  }
}
</script>
<style lang="scss">
.upload-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: gray;
  }
}

.dialog-img {
  width: 100%;
}
</style>
