import React, { Component, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import bindActionCreators from '../kReactRedux/bindActionCreators'
// 装饰器写法，普通写法是export default @connect()()
/**
 * connect参数有两个，第一个是state,第二个是派发的方法，格式是obj | function
 * 最后都会映射到props上面，因为这里的数据是响应的
 */
@connect(
  // state => ({count: state.count})
  // ({count}) => ({count: count})
  ({ count }) => ({ count }),
  // 对象的方式的话dispath就不能使用了
  // 所以要返回一个方法
  // {
  //   // add: (a) => ({type: 'ADD', payload: a})
      // 源码里自动用dispatch包裹了一层
  // add : (a) => {
  //       return (dispatch) => {dispatch({type: 'ADD', payload: a})}
  //     }

  // }
  // 这样的话比较繁琐
  // (dispatch) => {
  //   const add = () => dispatch({type: 'ADD'})
  //   return {dispatch, add}
  // }
  dispatch => {
    let creators = {
      add: () => ({ type: 'ADD' }),
      minus: () => ({type: 'MINUS'})
    }
    // 来自redux
    creators = bindActionCreators(creators, dispatch)
    return {dispatch, ...creators}
  }
)
class ReactRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    console.log(this.props)
    const {dispatch, count, add} = this.props
    return (
      <div>
        <p>react-redux</p>
        <p>{count}</p>
        <button onClick={add}>按钮</button>
        <button onClick={()=>dispatch({type: 'ADD'})}>按钮</button>
      </div>
    );
  }
}
export default ReactRedux

// hook的方式
// useSelector
// useDispatch

// export default function ReactRedux() {
//   // useSelector接收一个方法，方法的返回结果负值给count
//   const count = useSelector(store => { 
//     return store.counter.count
//   })
//   const dispatch = useDispatch()
//   // 需要缓存一下useCallback
//   const add = useCallback(() => {
//     dispatch({type: 'ADD'})
//   }, [])
//   return (
//     <div>
//       <p>react-redux</p>
//       <p>{count}</p>
//       <button onClick={add}>按钮</button>
//     </div>
//   )
// }