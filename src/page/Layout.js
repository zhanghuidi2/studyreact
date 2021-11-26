import styles from '../app.modules.css'
import React, { Component } from 'react';
import TabBottom from '../components/TabBottom';
import TabTop from '../components/TabTop';
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {children, showTop, showBottom} = this.props
    console.log(showTop, showBottom, this.props)
    return (
      <div style={ {height:'100%'} }>
        {showTop && <TabTop />}
        {/* <div>{children}</div> */}
        <div>{children.content}</div>
        {showBottom && <TabBottom />}
      </div>
    );
  }
}

export default Layout;