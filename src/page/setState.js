import React, {Component} from 'react';
class setState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.setCounter = this.setCounter.bind(this) // 如果不用箭头函数的话
  }

  // 这种写法是箭头函数的写法，比较简洁，不会因为this实例的时候报错this下面没有changeValue方法
  // changeValue = (v) => {
  //   this.setState({
  //     counter: this.state.counter + v
  //   })
  //   console.log(this.state.counter)
  // }
  // setCounter = () => {
  //   this.changeValue(1)
  // }

  componentDidMount() {
    // this.setState({
    //   counter: this.state.counter + 3
    // })
    // // 在生命周期里，setState是异步的
    // console.log(this.state.counter)
    // // 在原生事件里，setState是同步的
    // document.getElementById('btn').addEventListener('click', () => {
    //   this.setState({
    //     counter: this.state.counter + 3
    //   })
    //   // 在生命周期里，setState是异步的
    //   console.log(this.state.counter)
    // })
    console.log(this)
  }
  changeValue(v) {
    // this.setState({
    //   counter: this.state.counter + v
    // }, () => {
    //   // 在callback里面
    //   console.log(this.state.counter)
    // })
    // 合成事件里，setState是异步的
    // console.log(this.state.counter)
    // 使用的第二种方式,批量更新
    this.setState((state) => {
      return {
        counter: state.counter + v
      }
    })
    // 一次会执行+6操作
  }
  setCounter() {
    this.changeValue(1) // 类里面用到this要小心，所以这里要用上面的箭头函数，或者绑定this
    this.changeValue(2) // 类里面用到this要小心，所以这里要用上面的箭头函数，或者绑定this
    this.changeValue(3) // 类里面用到this要小心，所以这里要用上面的箭头函数，或者绑定this
    // setState会合并方法，只会直接执行+3的操作
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <div onClick = {this.setCounter}>{counter}</div>
        <div id="btn">{counter}</div>
      </div>
      
    );
  }
}

export default setState;