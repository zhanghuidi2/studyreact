// 组件生命周期的过程
// constructor -> componentWillMount(getDerivedStateFromProps) -> render -> （子组件constructor -> 子组件componentWillMount -> 子组件render -> 子组件componentDidMount）-> componentDidMount
// 当state更改的时候
// 父组件 (getDerivedStateFromProps)shouldComponentUpdate -> componentWillUpdate -> render ->（子组件componentWillReceiveProps -> 子组件shouldComponentUpdate -> 子组件componentWillUpdate -> 子组件render -> 子组件componentDidUpdate）-> componentDidUpdate
// !每次父组件render的时候，都要先执行子组件


import React, { Component } from 'react';
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('constructor');
  }
  // //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }
  // 在render之前，如果是更新的话在shouldComponentUpdate之前
  static getDerivedStateFromProps(props, state) {
    // 更改state
    console.log('getDerivedStateFromProps')
    // return null
    // 如果大于2，重新置0
    return state.count>2 && ({count: 0})
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 性能优化，是否render
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState)
    return true
  }
  // //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  

  // render之后，DidUpdate之前
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('getSnapshotBeforeUpdate')
    return null
    // return 5
  }
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('componentDidUpdate', Snapshot);
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() { 
    const { count } = this.state
    console.log('render')
    return (
      <div onClick={this.add}>
        {count !=5 && <ChildCom count={count}/>}
      </div>
    );
  }
}
 
export default LifeCycle;

class ChildCom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log('child----constructor')
  }
  // //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  // // 初始化挂载的时候不会执行，只有更新的时候会执行
  // componentWillReceiveProps(nextProps) {
  //   console.log('=======',nextProps, 'componentWillReceiveProps')
  // }
  // //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   console.log('child----componentWillMount');
  // }
  componentDidMount() {
    console.log('child----componentDidMount');
  }
  // 性能优化，是否render
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState)
    return true
  }
  // componentWillUpdate() {
  //   console.log('child----componentWillUpdate');
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('child----componentDidUpdate');
  }
  // 组件卸载执行，一般取消订阅或者清空定时器
  componentWillUnmount() {
    console.log('child----componentWillUnmount');
  }
  render() { 
    console.log('child----render')
    const { count } = this.props
    return (
      <div>{count}</div>
    );
  }
}
 
