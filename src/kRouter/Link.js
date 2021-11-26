// import React, { Component } from 'react';
// // ⚠️调用方法的区别
// export default class Link extends Component {
//   handleClick(e) {
//     e.preventDefault()
//   }
//   render() {
//     const {children, to} = this.props
//     return (
//       <a href={ to } onClick={(e) => this.handleClick(e)}>{ children }</a>
//     );
//   }
// }
import React, {useContext} from 'react'
import RouterContext from './RouterContext'
export default function Link(props) {
  const { children, to } = props
  const { history } = useContext(RouterContext)
  const handleClick = (e) => {
    e.preventDefault()
    // 命令式跳转(history从哪里来呢)
    // 因为有BrowserRouter,和HashRouter,每一种的history都不一样
    // BrowserRouter的跳转方式来自createBrowserHistory
    // MemoryRouter的跳转方式来自createMemoryHistory
    // HashRouter的跳转方式来自createHashHistory
    // 那是不是就是我不同的Router有不同的history，所以要中间加一层provider  也就是增加Router层
    history.push(to)
  }
  return (
    <div>
      <a href={to} onClick={handleClick}>{ children }</a>
      {/* 这里接收一下history */}

    </div>
  )
}