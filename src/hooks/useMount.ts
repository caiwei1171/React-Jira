import { useEffect } from 'react'

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, []) //eslint-disable-line react-hooks/exhaustive-deps
  // 你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可，
  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
  // 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
  // 通过跳过 Effect 进行性能优化，在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。
  // 在 class 组件中，我们可以通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决：
}
