export const isFalsy = (value: unknown): boolean => {
  if (value === 0) {
    return false
  } else {
    return !value
  }
}
// 在一个函数里，改变传入的对象是不好的
export const cleanObject = (object: object) => {
  const result: any = { ...object }
  Object.keys(object).forEach((key) => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}
// 防抖函数
// export const debounce = (func, delay = 500) => {
//   let timer = null
//   const _debounce = (args) => {
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       func.call(this, ...args)
//       timer = null;
//     }, delay);
//   }
//   return _debounce
// }
