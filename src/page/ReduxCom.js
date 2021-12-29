import React, {useState, useEffect, useCallback, Component} from 'react'
import store from '../store/store'

export default class extends Component {
  componentDidMount() {
    this.unRegister = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    this.unRegister()
  }
  onClick = () => {
    store.dispatch((dispatch, actions) => {
      setTimeout(() => {
        dispatch({type: 'ADD'})
      }, 1000)
    })
  }
  render() {
    return (
      <div>
        <span>{ store.getState()}</span>
        <button onClick={ this.onClick}>点击</button>
      </div>
    )
  }
}


function useForceUpdate() {
  const [, setState] = useState(0)
  const forceUpdate = useCallback(
    () => setState(prev => prev + 1),
    []
  )
  return forceUpdate

}
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
