import React, { Component } from 'react';
import store from '../store/store'
class ReduxComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // // 手动去更新页面，让最新的数据展示在页面上， 或者在render函数那里
  componentDidMount() {
    console.log(store)
    // 监听每次的变化
    this.unsubscribe = store.subscribe(() => {
      // 刷新当前组件
      this.forceUpdate()
    })
  }
  // 取消订阅
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }
  asyncAdd() {
    store.dispatch(() => {
      setTimeout(() => {
        store.dispatch({type: 'ADD'})
      }, 1000)
    })
  }
  render() {
    return (
      <div >
        <button onClick={() => store.dispatch({type: 'ADD'})}>add</button>
        <div>{store.getState()}</div>
        <button onClick={this.asyncAdd}>asyncAdd</button>
      </div>
    );
  }
}

export default ReduxComponents;
