import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function Child(props) {
  const {date} = props
  return (
    <div>{ date.toLocaleTimeString()}</div>
  )
}
class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log('child constructor')
  }
  componentDidMount() {
    console.log('child componentDidMount')
  }
  componentWillUpdate() {
    console.log('child componentWillUpdate')
  }
  componentWillUnmount() {
    console.log('child componentWillUnmount')
    // clearInterval(this.timer)
  }
  render() {
    console.log('child render')
    const {a} = this.props
    return (
      <div>{a}</div>
    );
  }
}
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      a: 1
    }
    console.log('constructor', )
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.setState({
    //     date: new Date()
    //   })
    //   this.a = this.a+1
    // }, 1000);
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.a === this.state.a) {
    //   return false
    // }
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log('componentWillUpdate')
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // clearInterval(this.timer)
  }
  onClick = () => {
    // this.setState({
    //   a: this.state.a
    // })
    history.push('/user')
  }
  render() {
    const { date, a } = this.state
    console.log('render')
    return (
      <div onClick={this.onClick}>
        { date.toLocaleTimeString()}
        <div><Child date={date}/></div>
        <div><Child2 a={a}/></div>
      </div>
    );
  }
}
 
export default ClassComponent;