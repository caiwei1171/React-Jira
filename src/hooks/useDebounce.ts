import { useEffect, useState } from 'react'

export const useDebounce = <v>(value: v, delay?: number): any => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    // 每次在value变化后设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    // 每次在上一个useEffect处理完后再运行下一个
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}
// 所以数据类型都可以赋值给unknown类型，但unknown类型只能赋值给unknow和any类型
// let y:unknown=0
// let a:any = ""
// let c:number = 0
// let d:unknown = ""
// let b:unknown = y
// let b:unknown = c
// d = b
// c = y as number
