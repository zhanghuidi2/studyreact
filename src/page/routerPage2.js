import React, { Component,useState } from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route, Switch} from '../kRouter/index'



import GoodsPage from '../components/GoodsPage';
import HomePage from '../components/HomePage';
import ProviderRoute from '../components/ProviderRoute';

// 路由还有BrowserRouter、HashRouter和MemoryRouter
// 前两者的区别就是vue路由的区别一个道理
// BrowserRouter利用h5的history的api,服务端需要配置，因为每次去一个新的页面，会认为是请求，就会接口宝404，所以需要服务端额外的去做配置
// HashRouter服务端不需要配置，但是功能没有上面的全面， #后面的服务端不会解析，所以不需要额外的配置
// MemoryRouter是浏览器地址栏不发生变化，页面还是会动态变化


// 重定向和路由拦截Prompt
{/* <Prompt
  when={formIsHalfFilledOut}
  message="Are you sure you want to leave?"
/> */}
// withRouter

class RouterPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() { 
    const {count} = this.state
    return (
      <div>
        <button onClick={()=>this.setState({count: count + 1})}>{ count }</button>
        {/* { count % 2 && */}
          <Router>
            {/* 1.link渲染成a标签，to是href */}
            <Link to="/">首页</Link>
            <br></br>
            <Link to="/goods">商品</Link>
            <br></br>
            <Link to="/mine">我的</Link>
            <br></br>
            {/* 7. 动态路由拿参数 */}
            <Link to="/shop/123">动态路由</Link>
            {/* 8. 嵌套路由 */}
            <Link to="/parentPage">嵌套路由</Link>
            <Switch>
              {/* <Route children={Page_404}></Route> */}
              {/* 4.children>>component>>render，源码规定，不在独占路由里，如果写了children,并且是函数，那么他是跟谁也不匹配，都展示的 */}
              {/* 5.children和render只能接收函数，components接收组件，如果使用内敛函数，那么将会认为两个组件都不想等，会一直卸载和挂载 
                函数而不是函数组件
              */}
              <Route path="/" exact
                component={HomePage}
                // render={Mine}
                //  也可以这样写，因为源码里是把所有的参数传出来了
                // render={props=>(console.log(props))}
                // children={Page_404}
                // component={() => <HomePage />}
              >
                {/* 6.这里也相当于是children */}
                {/* omg */}
          </Route>
          
            {/* <Route exact path="/" render={() => (
              loggedIn ? (
                <Redirect to="/dashboard"/>
              ) : (
                <PublicHomePage/>
              )
            )}/> */}
            {/* <Route path="/goods" render={Shop}></Route> */}
              <ProviderRoute path="/goods" render={Shop}></ProviderRoute>
              {/* 独占路由上面不会渲染出来 */}
              <Route path="/goods"  render={() => 11}></Route>
              <Route path="/mine" render={Mine}></Route>
              <Route path="/shop/:id" render={Shop}></Route>
              <Route path="/parentPage" render={ParentPage}></Route>
      
              {/* 2.不写path的话，就是都会渲染出来，上面和path匹配的也会渲染出来 */}
              {/* 3.独占路由的时候，404不要写到最上面，不写path会当成跟谁都匹配，都只会渲染404了 */}
              <Route children={Page_404}></Route>
            </Switch>
          </Router>
      </div>
    );
  }
}
 
export default RouterPage2;

function Mine(props) {
  // console.log(props);
  return (
    <div>render -- Mine</div>
  )
}
function Page_404(props) {
  return (
    <div>render -- Page_404</div>
  )
}

// 动态路由
// 参数从match.params里拿，直接结构出来
function Shop({match}) {
  const { params } = match
  const { id } = params
  return (
    <div>shop=---{ id }</div>
  )
}

// 嵌套路由
function ParentPage(props) {
  const {match} = props
  const { params, url } = match
  
  // 9. js的跳转方式
  const jump = () => {
    props.history.push(`${url}/123`)
  }
  return (
    <div>
      <p>ParentPage</p>
      <a onClick={jump}> 点击 </a>
      {/* 10. path 动态拼接 */}
      {/* 这里会替换到上面的switch，所以就不用写switch了 */}
      <Route path={url+'/:id'}  component={ ChildPage }></Route>
    </div>
  )
}

function ChildPage(props) {
  const {id} = props.match.params
  return (
    <div>ChildPage=---{ id }</div>
  )
}

