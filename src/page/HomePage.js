import React, { Component } from 'react';
import Layout from './Layout';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Layout showTop={true} showBottom={false}>
        {/* 这里直接写children，不需要再包裹div了 */}
        {/* HomePage */}
        {
          {content: (
            <div>HomePage</div>
          )}
        }
      </Layout>
    );
  }
}

export default HomePage;