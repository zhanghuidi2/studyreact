import React, {useState} from 'react'
import PubilcModal from '../components/PubilcModal'

// 这个就是你要传给弹窗组件的dom
const MyFrom = (props) => {
  // 数据和方法从父组件拿
  const {age, changeAge, add} = { ...props }
  return (
    <div>
      <p>我是要在弹窗里展示的内容</p>
      <div>点击新增数据晴空，编辑编辑数据回显 { age }</div>
      <button onClick={changeAge}>编辑</button>
      <button onClick={add}>新增的确定按钮</button>
    </div>
  )
}

// 这个是你自己的页面
export default function MyPage() {
  const [age, setAge] = useState(7)
  // 编辑的方法
  const changeAge = () => {
    setAge(age + 1)
  }
  // 新增的方法
  const add = () => {
    setAge('')
  }
  return (
    <div>
      {/* 这里是你需要引入的弹窗 */}
      <button onClick={add}>新增</button>
      <PubilcModal component={<MyFrom age={age} changeAge={changeAge} add={ add} />}/>
    </div>
  )
}