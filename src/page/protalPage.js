import React, { Component } from 'react';
import DialogCom from '../components/Dialog';
class ProtalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
  }
  totoggle = (flag = 1) => {
    this.setState({
      showDialog: flag == 1 ? !this.state.showDialog : false
    }) 
  } 
  render() { 
    const {showDialog} = this.state
    return (
      <div>
        <button onClick={()=>this.totoggle(1)}>3333</button>
        {showDialog && <DialogCom totoggle={ this.totoggle }/>}
      </div>
    );
  }
}
 
export default ProtalPage;