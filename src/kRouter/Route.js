import React, { Component } from 'react';
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";
export default class Route extends Component { 
  render() {
    const { children, render, component, path, computedMatch } = this.props
    return (
      // children现在是一个函数，所以要运行一下
      <RouterContext.Consumer>
        {
          (context) => {
            const  match = computedMatch ? computedMatch : path ? matchPath(context.location.pathname, this.props) : context.match
            const props = {...context, match}
            // 匹配的话需要child>components>render
            // 不匹配child===========这样是为什么children和谁都匹配
            return (
              match
                ? children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === "function"
                ? children(props)
                  : null
            )
          }
        }
      </RouterContext.Consumer>
    );
  }
}