/*
 * @Date: 2022-06-17 14:53:34
 * @LastEditors: HuangLin
 * @LastEditTime: 2022-07-22 16:51:15
 * @FilePath: \basic-components\src\packages\baseform\utils\upload.ts
 */
import { ElLoading, ElMessage } from 'element-plus'

/**
 * 创建唯一的字符串
 * @return {string} ojgdvbvaua40
 */
function createUniqueString(): string {
  const timestamp = +new Date() + ''
  const randomNum = (1 + Math.random()) * 65536 + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * 数字存储大小格式化
 * @param {number} num 存储大小 单位：Byte
 * @param {number} digits 保留几位小数，默认2
 * @return {string} 2MB
 */
function formatStorage(num: number, digits?: number) {
  digits = digits || 2
  if (num < 1024) {
    return num + 'B'
  }
  num = (num * 1000) / 1024
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value)
          .toFixed(digits)
          .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
        si[i].symbol +
        'B'
      )
    }
  }
}
// 校验图片占用大小
function validateSize(file: any, maxSize: Number) {
  const size = +maxSize
  const isSizeOut = file.size / 1024 > size
  if (isSizeOut) {
    ElMessage({
      type: 'error',
      message: '上传图片大小不能超过' + formatStorage(size * 1024)
    })
    return false
  } else {
    return true
  }
}
// 校验上传图片分辨率
function validateImgScreen(
  file: any,
  screenWidth: Number,
  screenHeight: Number,
  maxScreenWidth: Number,
  maxScreenHeight: Number
) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e: any) => {
      const base64Url = e.target.result
      const img = new Image()
      img.onload = () => {
        if (screenWidth && +img.width !== +screenWidth) {
          reject()
          ElMessage({
            type: 'error',
            message: '上传图片宽度限制只能为' + screenWidth + '像素'
          })
        } else if (screenHeight && +img.height !== +screenHeight) {
          reject()
          ElMessage({
            type: 'error',
            message: '上传图片高度限制只能为' + screenHeight + '像素'
          })
        } else if (maxScreenWidth && +img.width > +maxScreenWidth) {
          reject()
          ElMessage({
            type: 'error',
            message: '上传图片宽度不能超过' + maxScreenWidth + '像素'
          })
        } else if (maxScreenHeight && +img.height > +maxScreenHeight) {
          reject()
          ElMessage({
            type: 'error',
            message: '上传图片高度不能超过' + maxScreenHeight + '像素'
          })
        } else {
          resolve(true)
        }
      }
      img.src = base64Url
    }
    fileReader.readAsDataURL(file)
  })
}

export default {
  validateImgScreen,
  validateSize
}
