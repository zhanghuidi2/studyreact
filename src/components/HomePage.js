import React, { Component } from 'react';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() { 
    console.log('render', this.props);
    return (
      <div>HomePage</div>
    );
  }
}
 
export default HomePage;