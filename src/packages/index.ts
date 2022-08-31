/*
 * @Date: 2022-06-16 14:14:00
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-27 10:01:01
 * @FilePath: \basic-components\src\packages\index.ts
 */
import { App } from 'vue'
const modules: any = {}
const files = import.meta.globEager('./*/index.vue')
console.log('files', files)
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    const keys = key.split('/')
    const name = keys[1]
    modules[`com-${name}`] = files[key].default
  }
}
const components = Object.values(modules)

// 全局注册组件
const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}
export { install }

export default { install }
