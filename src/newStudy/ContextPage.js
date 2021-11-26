// 跨层级传递跟vue里面的provider inject一样，不需要跟props（由父及子的传递）一样一层层传递，
import React, { Component } from 'react';

import {BUtton} from 'antd'
class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {theme, user} = this.state
    return (
      <div>
        <h3>contextpage</h3>
      </div>
    );
  }
}
 
export default ContextPage;
