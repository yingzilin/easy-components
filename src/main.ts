/*
 * @Date: 2022-06-24 17:06:42
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-27 09:58:43
 * @FilePath: \basic-components\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import 'base-vite-ui/style.css'
import 'element-plus/dist/index.css'
import 'default-passive-events'
import bUI from './packages/index'
const app = createApp(App)
app.use(bUI)
app.mount('#app')
