<!--
 * @Date: 2022-06-16 14:14:38
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-06-24 16:49:34
 * @FilePath: \my-components\src\packages\loading\index.vue
-->
<template>
  <div class="loading_container" v-bind="$attrs">
    <div class="loading"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BLoading',

  setup() {
    return {}
  }
})
</script>

<style scoped>
.loading_container {
  display: flex;
  width: fit-content;
  height: 100%;
}

.loading {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 3px solid;
  border-color: #ddd #ddd transparent transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

.loading::after,
.loading::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  margin: auto;
  content: "";
  border: 3px solid;
  border-color: transparent transparent #409eff #409eff;
  border-radius: 50%;
  transform-origin: center center;
  animation: rotationBack 0.5s linear infinite;
  animation: rotationBack 0.5s linear infinite;
}

.loading::before {
  width: 32px;
  height: 32px;
  border-color: #ddd #ddd transparent transparent;
  animation: rotation 1.5s linear infinite;
  animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
