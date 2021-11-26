// 这一层是为了传递给下面history, provider不能直接写到BrowserRouter里面，因为别的方式还需要
import React, { Component } from 'react';
import RouterContext from './RouterContext'
export default class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }
  }
  static computeRootMatch(pathname) {
    return {path: "/", url: "/", params: {}, isExact: pathname === "/"};
  }
  componentDidMount() {
    this.unlisten = this.props.history.listen(({ location }) => {
      this.setState({
        location
      }, () => {
          console.log(this.state.location);
      })
    })
  }
  componentWillUnmount() {
    this.unlisten()
  }
  render() {
    const { children, history } = this.props
    const { location } = this.state
    const value = {}
    return (
      <RouterContext.Provider value={{history,location, match: Router.computeRootMatch(location.pathname)}}>
        {children}
      </RouterContext.Provider>
    );
  }
}
