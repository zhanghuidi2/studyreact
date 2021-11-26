import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import styles from './app.modules.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg'
import store from './store/store'
import { Provider } from 'react-redux'
// 对象
const obj = {
  firstName: 'zhang',
  lastName: 'san'
}
// 函数
const formate = (obj) => `${obj.firstName} ${obj.lastName}`

//条件语句
const showFlag = true

// 循环语句
const arr = [1, 2, 3]
// 表达式
const temp = <p>hahhaha</p>
// const jsx = (<div className={styles.app}>hello,
//     <div>{obj.firstName + ' ' + obj.lastName}</div>
//     <div>{formate(obj)}</div>
//     {showFlag?'3':'4'}
//     {showFlag&&temp}
//     <ul>
//       {arr.map(item=>(
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//     <img src={logo} 
//     // className="logo"
//     className={styles.logo} 
//     style={{width:'50px',height:'50px'}}></img>
//   </div>)

// 1.jsx表达式{}
// 2.对象
// 3.函数
// 4.条件语句
// 5.循环语句
// 6.属性
// 7.模块化 去配置文件里modules=true
ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
    
  //   {/* {jsx} */}
  // </React.StrictMode>,
  <App />,
  document.getElementById('root')
);
  // const render = () => {
  //   ReactDOM.render(
  //     <React.StrictMode>
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
        
  //       {/* {jsx} */}
  //     </React.StrictMode>,
  //     document.getElementById('root')
  //   );
  // }
  // render()
  // store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
