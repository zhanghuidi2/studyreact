// import React, { Component } from 'react';
// class PureCom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     // this.add = this.add.bind(this)
//   }
//   // add() {
//   //   this.setState({
//   //     count: 100
//   //   })
//   // }
//   add = () => {
//     this.setState({
//       count: 100
//     })
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.count != this.state.count
//   }
//   render() {
//     const {count} = this.state
//     // 如果shouldComponentUpdate返回true,那么，不论counter是否变化，都会执行render
//     console.log('000', this.state)
//     return (
//       <div onClick={this.add}>{count}</div>
//     );
//   }
// }

// export default PureCom;

import React, { PureComponent } from 'react'
class PureCom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obj: {
        num : 0
      }
    };
  }
  add = () => {
    this.setState({
      count: 100
    })
  }
  add2 = () => {
    this.setState({
      obj: {
        num: 6
      }
    })
  }
  render() {
    const {count} = this.state
    console.log('000', this.state)
    // 只有count发生变化，才会render，但是是浅比较，如果是一个对象，那么还是回一句一直渲染的
    return (
      // <div onClick={this.add}>{count}</div>
      <div onClick={this.add2}>{this.state.obj.num}</div>
    );
  }
}

export default PureCom;
