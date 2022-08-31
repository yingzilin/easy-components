<template>
  <el-card v-bind="$attrs" class="box-card" shadow="hover">
    <slot></slot>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BCard',
  inheritAttrs: false
})
</script>
<script setup lang="ts"></script>

<style scoped></style>
