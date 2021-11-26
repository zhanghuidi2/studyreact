// import React, { Component } from 'react';
// import {BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom'
// class RouterPage extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Link to='/'>首页</Link>
//           <Link to='/user'>用户中心</Link>
//           <Switch>
//             <Route path='/' exact 
//               // component={HomeCom}
//               children={() => <div>children</div>} 
//               // render={() => <div>render</div>}
//               // children>>>component>>>render
//               // 不在独占路由里面children是和谁都不匹配的
//             >
//             </Route>
//             <Route path='/user' component={UserCom}></Route>
//             {/* 从上到下匹配，知道找到匹配的位置，这是独占路由 */}
//             <Route component={EmptyCom}></Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

// export default RouterPage;

// class HomeCom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  };
//   }
//   render() {
//     return (
//       <div>HomeCom</div>
//     );
//   }
// }


// class UserCom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  };
//   }
//   render() {
//     return (
//       <div>UserCom</div>
//     );
//   }
// }

// class EmptyCom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  };
//   }
//   render() {
//     return (
//       <div>EmptyCom</div>
//     );
//   }
// }

