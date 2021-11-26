import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class DialogCom extends Component {
  constructor(props) {
    super(props);
    const doc = window.document
    this.node = doc.createElement('div')
  }
  componentDidMount() {
    const doc = window.document
    doc.body.appendChild(this.node)
  }
  componentWillUnmount() {
    if (this.node) {
      window.document.body.removeChild(this.node)
    }
  }
  render() { 
    const {totoggle} = this.props
    return ReactDOM.createPortal(
      <div className="dialog">
        <h3>DialogCom</h3>

        <div>哈精神焕发教科书</div>

        <button onClick={() => totoggle(2)}> 关闭</button>
      </div>,
      this.node
    );
  }
}
 
export default DialogCom;