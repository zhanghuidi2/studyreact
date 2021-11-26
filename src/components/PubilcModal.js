import React, { Component } from 'react';
// 这个是公共的弹窗组件
class PubilcModal extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {component} = {...this.props}
    return (
      <div>{component}</div>
    );
  }
}
 
export default PubilcModal;