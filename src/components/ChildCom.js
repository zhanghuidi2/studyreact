import React, { Component } from 'react';
import GlobalContext from '../page/context'
class Grandson extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      // 子组件消费
        <GlobalContext.Consumer>
        {
          ({ name, age }) => (
            <div>
              <h2>孙子 : {name}--{age}</h2>
            </div>
          )
        }
      </GlobalContext.Consumer>
    )
  }
}
export default Grandson