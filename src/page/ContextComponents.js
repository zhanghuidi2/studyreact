import React, { Component, useContext } from 'react';
import GlobalContext from './context'
import Grandson from '../components/ChildCom'
// 在这里创建，不是在父组件里
 // 第一步：创建context
// const context = React.createContext()
// const ThemeContext = React.createContext()
// 跨层级使用
// 1.consumer 哪一种组件都可以使用，写起来比较繁琐
export default function ContextCom() {
  const info = {
    name: '张三',
    age: '19'
  }
  return (
    <div>
      <h2>父组件</h2>
      <p>-------------</p>
      {/* 第二步：Provider传递value */}
      {/* <context.Provider value={info}>
        <ThemeContext.Provider value={{color: 'red'}}>
          <Child></Child>
        </ThemeContext.Provider>
      </context.Provider> */}
      <GlobalContext.Provider value={info}>
        <Child></Child>
      </GlobalContext.Provider>
    </div>
  )
}


class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div>
        <h3>子组件</h3>
        <p>-------------</p>
        <Grandson/>
      </div>
    )
    
  }
}


// 必须在本页面获取到context
// 如何在不同的组件，这些组件还不同在一个js里，要建一个context.js文件，如何每一个js引入





// Consumer可以在任何组件里使用，也可以消费多个context
// class Grandson extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() { 
//     return (
//       // 子组件消费
//       //   <context.Consumer>
//       //   {
//       //     ({ name, age }) => (
//       //       <ThemeContext.Consumer>
//       //         {
//       //           ({ color }) => (
//       //             <div>
//       //             <h2>孙子: {name} ---- {age}</h2>
//       //             <h2>{color}</h2>
//       //             </div>
//       //           )
//       //         }
//       //       </ThemeContext.Consumer>
//       //     )
//       //   }
//       // </context.Consumer>
//       <GlobalContext.Consumer>
//         {
//           ({ name, age }) => (
//             <div>
//               <h2>孙子: {name}--{ age}</h2>
//             </div>
//           )
//         }
//       </GlobalContext.Consumer>
//     )
//   }
// }


// 类组件contextType,不能消费多个context
// class Grandson extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   // 1.把context变量负值给静态属性，因为这里只能负值一次
//   static contextType = GlobalContext
//   render() { 
//     // 2.拿到value
//     const { name, age } = this.context
//     console.log(this.context);
//     return (
//       // 子组件消费
//       <div>
//         <h2>孙子: { name } ---- { age }</h2>
//         {/* <h2>{color}</h2> */}
//       </div>
//     )
//   }
// }


// // 函数组件 useContext,可以消费多个
// function Grandson() {
//   const { name, age } = useContext(GlobalContext)
//   const {color} = useContext(ThemeContext)
//   return (
//     // 子组件消费
//       <div>
//       <h2>孙子: {name} ---- {age}</h2>
//       <h2>{color}</h2>
//       </div>
//   )
// }


