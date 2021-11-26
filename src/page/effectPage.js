import React, { useState, useEffect, useReducer, useCallback } from 'react';
import store from '../store/store'
export default function EffectPage() {
  const [count, setCount] = useState(0)
  const forceUpdate = useForceUpdate()
  // const [, forceUpdate] = useReducer(x=>x+1, 0)
  // const [date, setDate] = useState(new Date())

  // useEffect(() => {
  //   // 相当于didMount和didUpdate
  //   console.log('useEffect')
  //   document.title = `count执行了${count}次`
  // }, [count]) // 仅仅依赖count

  // useEffect(() => {
  //   // 相当于didMount和didUpdate
  //   console.log('useEffect')
  //   const timer = setInterval(() => {
  //     setDate(new Date())
  //   }, 1000)
  //   return () => clearInterval(timer) // renturn一个函数，相当于willUnmount钩子
  // }) // []代表谁也不依赖，就是didmount的之后执行一次

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate()
    })
    return ()=>unsubscribe()
  }, [store])
  return (
    <div>
      {/* <p onClick={()=>setCount(count + 1)}>{count}</p> */}
      {/* <p>{date.toLocaleTimeString()}</p> */}
      {/* <p>{useClock().toLocaleTimeString()}</p> */}
      <button onClick={() => store.dispatch({type: 'ADD'})}>add</button>
        <div>{store.getState()}</div>
    </div>
  )
}

// 自定义hook
// 以use开头
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    // 相当于didMount和didUpdate
    console.log('useEffect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer) // renturn一个函数，相当于willUnmount钩子
  }, []) // []代表谁也不依赖，就是didmount的之后执行一次
  return date
}
// 在类组件里有forceUpdate()更新或者刷新当前组件
// 在函数组件里怎么实现
// 方法1: useReducer接收三个参数，自定义reducer,初始值，和init函数
// const [, forceUpdate] = useReducer((x=>x+1, 0) // 直接调用forceUpdate(就可以了)
// 方法2: 
// const [, forceUpdate] = useState({}) // 调用调用forceUpdate({}),需要加一个对象，每一次的对象都不想等
// 方法3:自定义hook
// function useForceUpdate() {
//   const [, forceUpdate] = useState(0)
//   return function() {forceUpdate(prev=>prev+1)}
// }
// 加上useCallback,缓存一下
function useForceUpdate() {
  const [, setState] = useState(0)
  const forceUpdate = useCallback(
    () => setState(prev => prev + 1),
    []
  )
  return forceUpdate

}
  

// const counterReducer = (state = 1, action) => {
  // switch (action.type) {
  //   case 'ADD':
  //     return state + 1;
  //   case 'MINUS':
  //     return state - 1;
  //   default:
  //     return state;
  // }
  // return state + action
// }
// const [num, setNum] = useReducer(counterReducer, 0)
// setNum(1)
