<!--
 * @Date: 2022-06-24 16:34:41
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-26 11:27:14
 * @FilePath: \basic-components\src\App.vue
-->
<template>
  <div style="width: 100%; height: 100%">
    <!-- <b-loading></b-loading> -->
    <!-- <b-upload></b-upload> -->
    <b-table :columns="columns" :data="data.list" :listTotal="100">
      <template #operation>
        <div class="" style="display: flex">
          <el-button type="">009</el-button>
        </div>
      </template>
    </b-table>
    <div class="flex" style="display: flex; flex-wrap: wrap">
      <b-img
        v-for="item in 3"
        :key="item"
        :preview-src-list="[
          'https://img1.baidu.com/it/u=4179294343,2787403018&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
        ]"
        src="https://img1.baidu.com/it/u=4179294343,2787403018&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
        style="width: 200px"
      ></b-img>
    </div>
    <b-form
      :form-item="form"
      :form-data="formData"
      :button="formButton"
    ></b-form>
    <b-card>
      <b-upload
        :limit="1"
        :action="data.action"
      ></b-upload>
      <!-- <b-searchForm
        :params="data.searchForm"
        @onSubmit="handleOnSubmit"
        showMore
        @resetForm="handleResetForm"
      >
        <template #form>
          <el-col :span="6">
            <el-form-item label="Approved by">
              <el-input
                v-model="data.searchForm.user"
                placeholder="Approved by"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Activity zone">
              <el-select
                v-model="data.searchForm.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Activity zone">
              <el-select
                v-model="data.searchForm.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Activity zone">
              <el-select
                v-model="data.searchForm.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
        </template>
        <template #more>
          <el-col :span="8">
            <el-form-item label="Activity zone">
              <el-select
                v-model="data.searchForm.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Activity zone">
              <el-select
                v-model="data.searchForm.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Activity zone">
              <el-select
                v-model="data.searchForm.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
        </template>
      </b-searchForm> -->
    </b-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

interface searchForm {
  user?: string
  region?: string
}
const data = reactive({
  searchForm: {} as any,
  list: [{ title: '009' }],
  action: `${import.meta.env.VITE_APP_REQUEST_URL}util/file/upload`
})
const columns = reactive([
  { label: '??????', prop: 'title' },
  { label: '??????', prop: 'title' },
  { label: '??????', prop: 'title' },
  { label: '??????', prop: 'title' },
  { label: '??????', prop: 'title' },

  { label: '??????', prop: 'title' },
  { label: '??????', prop: 'title' },
  { label: '??????', prop: 'content' },
  {
    label: '??????',
    type: 'slot',
    slot_name: 'operation',
    width: '500px'
  }
])

const checkHtml = (rule: any, value: string, callback: any) => {
  let check =
    /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/
  if (check.test(value)) {
    callback()
  } else {
    callback(new Error('???????????????????????????'))
  }
}
const form = reactive([
  {
    type: 'input', //??????
    label: '?????????', //label???
    prop: 'username', //prop???
    required: true, //????????????
    rules: [
      //????????????
      { validator: checkHtml, trigger: 'blur' }
    ],
    data_type: {
      type: 'textarea',
      autosize: {
        minRows: 1,
        maxRows: 3
      }
    }
  },
  {
    type: 'input',
    label: '?????????',
    prop: 'phone',
    // value_type: "phone",
    rules: []
  },
  {
    type: 'select',
    label: '??????',
    prop: 'choose',
    placeholder: `?????????---`,
    options: [
      {
        value: '0',
        label: '?????????01'
      },
      {
        value: 1,
        label: '?????????02'
      },
      {
        value: 2,
        label: '?????????'
      }
    ]
  },
  {
    label: '????????????',
    type: 'datePicker',
    prop: 'time',
    time_limit: true,
    type_params: {}
  },
  {
    label: '????????????',
    type: 'checkBox',
    prop: 'checkBox',
    type_params: {},
    options: [
      {
        label: '009',
        value: '999'
      }
    ]
  },
  {
    label: '??????',
    type: 'upload',
    prop: 'upload',
    required: true, //????????????
    type_params: {
      action: `${import.meta.env.VITE_APP_REQUEST_URL}util/file/upload`,
      limit: 3
    }
  }
])
const formData = reactive({
  //??????????????????
  username: '',
  choose: '',
  phone: '',
  time: '',
  checkBox: ['999'],
  upload: [
    {
      name: '009',
      url: 'https://img0.baidu.com/it/u=2521851051,2189866243&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
    }
  ]
})
const formButton = reactive([
  {
    label: '??????', //????????????
    type: 'primary', //??????
    key: 'submit', //?????????,
    callback: (e: any) => {
      handleSubmit(e)
    } //????????????
  },
  {
    label: '??????',
    type: 'primary',
    key: 'checks',
    callback: (e) => {
      handleCheck(e)
    }
  }
])
const handleCheck = (e: any) => {
  console.log('handleCheck', e)
}
const handleOnSubmit = (val: any) => {
  console.log('submit', val)
}
const handleResetForm = () => {
  data.searchForm = {}
}
const handleSubmit = (e: any) => {
  console.log('handleSubmit', formData)
}
</script>

<style></style>
