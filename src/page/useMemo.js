import React, { useState, useMemo } from 'react';
export default function UseMemo() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  // const expensive = () => {
  //   console.log('computed')
  //   let sum = 0
  //   for (let i = 0; i < count; i++){
  //     sum+=i
  //   }
  //   return sum
  // }

  // useMemo类似vue里的计算属性，第一个参数接受一个方法，第二个参数是依赖项，加上第二个参数就是惰性求值了
  const expensive = useMemo(() => {
    console.log('computed')
    let sum = 0
    for (let i = 0; i < count; i++){
      sum+=i
    }
    return sum
  }, [count])
  return (
    <div>
      <p onClick={() => setCount(count + 1)}>{count}</p>
      {/* 不管是不是点击count，那么这个方法都会执行，造成开销昂贵 */}
      {/* <div>{ expensive() }</div> */}
      {/* 使用useMemo以后，本身会执行一下啊函数返回的是结果，这里不需要在调了 */}
      <div>{ expensive }</div>
      <input value={value} onChange={e=>setValue(e.target.value)} />
    </div>
  )
}