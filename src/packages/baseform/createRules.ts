/*
 * @Date: 2022-06-27 11:20:05
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-06-27 11:29:25
 * @FilePath: \basic-components\src\packages\baseform\createRules.ts
 */
import { ITEM_RENDER_EVT } from 'element-plus/es/components/virtual-list/src/defaults'
import { checkPhone, checkEmail, checkIdCard } from './utils/validator'

const createRules = (data: any) => {
  data.forEach((item: any) => {
    let rules_array = [] as any
    if (item.required) {
      const rule = {
        required: true,
        message: item.message || createMessage(item)
      }
      rules_array.push(rule)
    }
    //校验手机号码
    if (item.value_type && item.value_type === 'phone') {
      const rule = { validator: checkPhone, trigger: 'change' }
      rules_array.push(rule)
    }
    //校验邮箱
    if (item.value_type && item.value_type === 'email') {
      const rule = { validator: checkEmail, trigger: 'change' }
      rules_array.push(rule)
    }
    //校验身份证号码
    if (item.value_type && item.value_type === 'idCard') {
      const rule = { validator: checkIdCard, trigger: 'change' }
      rules_array.push(rule)
    }
    //判断是否还有其它校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      //    console.log('判断是否还有其它校验规则',item.rules,item.rules.length);
      rules_array = rules_array.concat(item.rules)
      //    console.log('判断是否还有其它校验规则---',rules_array);
    }
    item.rules = rules_array
  })
  return data
}

const createMessage = (data: any) => {
  let msg = ''
  switch (data.type) {
    case 'input':
      msg = `请输入${data.label}`
      break
    case 'select':
      msg = `请选择${data.label}`
      break
    case 'checkBox':
      msg = `请选择${data.label}`
      break
    case 'radio':
      msg = `请选择${data.label}`
      break
    case 'upload':
      msg = `请上传${data.label}`
      break
  }
  return msg
}
export default createRules
