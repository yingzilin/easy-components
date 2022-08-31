<!--
 * @Date: 2022-06-16 14:15:59
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-26 11:31:46
 * @FilePath: \basic-components\src\packages\table\index.vue
-->
<template>
  <el-table v-bind="$attrs" v-loading="isLoading">
    <el-table-column
      type="selection"
      width="50"
      label="#"
      align="center"
      v-if="selection"
    />
    <el-table-column
      type="index"
      width="50"
      label="#"
      align="center"
      v-if="rowIndex"
    />
    <template v-for="item in columns" :key="item.prop">
      <el-table-column
        v-if="item?.type === 'slot'"
        :label="item?.label"
        :prop="item?.prop"
        :width="item?.width ?? width"
        :align="item?.align ?? null"
        :min-width="item?.minWidth ?? null"
        :fixed="item?.fixed ?? null"
        :sortable="item?.sortable ?? false"
      >
        <template #default="scope">
          <slot :name="item?.slot_name" :data="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="item?.prop"
        :label="item?.label"
        :width="item?.width ?? width"
        :align="item?.align ?? null"
        :min-width="item?.minWidth ?? null"
        :fixed="item?.fixed ?? null"
        :sortable="item?.sortable ?? false"
      />
    </template>
    <template #empty>
      <div>暂无数据</div>
    </template>
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BTable',
  inheritAttrs: false
})
</script>
<script lang="ts" setup>
const props = defineProps({
  columns: {
    type: Array as any,
    required: true
  },
  //是否可选
  selection: {
    type: Boolean,
    default: false
  },
  //是否显示序号
  rowIndex: {
    type: Boolean,
    default: true
  },
  width: {
    type: Number || String,
    default: null
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
<style>
.el-table .el-table__cell {
  position: static;
  z-index: none !important;
}
</style>
<style scoped></style>
