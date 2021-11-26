// 组件更新机制的两种方式

// 1.直接使用{}  如果父组件传下来了props，那么父组件更新，子组件会也跟着更新,因为state变化会让父组件整颗render,所以子组件也render
// 假如我的页面值值展示一个普通变量，没有在state上面的，页面是不会render的

// 2.子组件里可以将props变成自己的state，任何在componentWillReceiveProps钩子里去手动更改state也可以更新

// 3.只要又一个state有一个自执行的方法出发了state变化，即使页面没有{}使用，页面不论父亲，子都会render



import React, { Component } from 'react';
class PropsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1
    }
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        test: this.state.test
      })
    }, 1000)
  }
  render() { 
    const { test } = this.state
    let test3 = 5
    return ( 
      <div>
        {/* 更改了state里的数据，会导致整个树render */}
        {/* <span onClick={() => this.setState({ test: test + 1 })}>{test}</span> */}

        {/* 普通一个数据，没有在state上面的即使数据改变就不会render */}
        {/* <span onClick={() => (test3 = 8)}>普通变量传递test3{test3}</span> */}

        <p>子组件</p>
        <ChildPage></ChildPage>
      </div>
    );
  }
}
 
export default PropsPage;

// 子组件
class ChildPage extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() { 
    console.log('render');
    // const {test, test3} = this.props
    return ( 
      <div>
        <span>33</span>
      </div>
    );
  }
}
