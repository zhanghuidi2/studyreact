import React, { PureComponent, useState, useCallback } from 'react';
export default function UseCallbackPage() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const add = useCallback(() => {
    return count + 9
  }, [count])
  return (
    <div>
      {/* 每次点击count或者在输入框内输入数据，孩子都会重新render， */}
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <input value={value} onChange={e=>setValue(e.target.value)} />
      <Child add={ add }/>
    </div>
  )
}
// 还要使用纯函数 PureComponent
class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    console.log('render child')
    return (
      <div onClick={() => console.log(this.props.add())}>444</div>
    );
  }
}