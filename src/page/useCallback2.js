import React, {useState, useCallback} from 'react'
function Child(props) {
  console.log('child render')
  // const {num, changeNum} = props
  return (
    <div>
      {/* <input value={num} onChange={e => (changeNum(e) )}/> */}
    </div>
  )
}
export default function useCallback2() {
  console.log('parent render=======')
  const [name, setName] = useState(1)
  const [num, setNum] = useState(0)
  const changeName = useCallback(() => {
    setName(name+1)
  }, [name])
  // const changeNum = useCallback((e) => {
  //   setNum(e.target.value)
  // }, [num])
  return (
    <div>
      <div>name的值： {name}</div>
      {/* <div>num的值： {num}</div> */}
      <button onClick={changeName}>点击更换name</button>
      <Child />
    </div>
  )
}
