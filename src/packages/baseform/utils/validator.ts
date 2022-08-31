const emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const phoneRule = /^[1][3,4,5,7,8][0-9]{9}$/
const idCardRule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

//校验手机号码
export const checkPhone = (rule: any, value: string, callback: any) => {
  if (phoneRule.test(value)) {
    callback()
  } else {
    callback(new Error('请输入11位数手机号码'))
  }
}

//校验邮箱
export const checkEmail = (rule: any, value: string, callback: any) => {
  if (emailRule.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确邮箱地址'))
  }
}

//校验身份证号码
export const checkIdCard = (rule: any, value: string, callback: any) => {
  if (idCardRule.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确身份证号码'))
  }
}
