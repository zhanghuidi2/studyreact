import logo from './logo.svg';
import './App.css';
import ClassComponent from './page/classComponents';
import FunctionComponents from './page/functionComponents';
import SetState from './page/setState';
import HomePage from './page/HomePage';
import ReduxComponents from './page/ReduxComponents';
import ReactRedux1 from './page/ReactRedux1';
import RouterPage from './page/routerPage';
import PureCom from './page/pureCom';
import LifeCycle from './page/lifeCyclePage';
import EffectPage from './page/effectPage';
import UserMemo from './page/useMemo';
import UseCallbackPage from './page/UseCallback';
import ProtalPage from './page/protalPage';
import ReactRedux from './page/ReactRedux';
import ContextCom from './page/ContextComponents';
import RouterPage2 from './page/routerPage2';
import PropsPage from './page/PropsPage';
import UseCallback2 from './page/useCallback2'
import MyPage from './page/MyPage';
import ContextPage from './newStudy/ContextPage';
import Demo from './page/Antd'
// import Demo from './page/Antd2'
function App() {
  // jsx
  // 1。变量
  // 2.条件语句
  // 3. 对象
  // 4.循环
  // 5.函数
  // 6.样式
  const a = 'hello'
  const b = false
  const date = new Date()
  console.log(typeof date)
  const list = new Array(3).fill(9)
  const add = (a, b) => (a + b)
  return (
    <div style={{ height: '100%' }}>
      <Demo />





      {/* {<ContextPage />} */}{/* {<ClassComponent />} */}
       {/* <FunctionComponents /> */}
      {/* <SetState /> */}
      {/* <HomePage /> */}
      {/* <ReduxComponents /> */}
      {/* <ReactRedux1 /> */}
      {/* <RouterPage /> */}
      {/* <PureCom /> */}
      {/* <LifeCycle /> */}
      {/* <EffectPage /> */}
      {/* <UserMemo /> */}
      {/* <UseCallbackPage /> */}
      {/* <ProtalPage /> */}
      {/* <ReactRedux /> */}
      {/* <ContextCom /> */}
      {/* <RouterPage2 /> */}
      {/* <PropsPage /> */}
      {/* <UseCallback2 /> */}
      {/* {<MyPage />} */}
    </div>

    // <div> 
    //   <div>{a}</div>
    //   {!b && <Child />}
    // {b ? <Child /> : <div>999</div>}
    //   {date.toLocaleDateString()}
    //   <br />
    //   {list.map((item, index) => (
    //     <div key={index}>
    //       <i>{item} --- {index}</i>
    //       <br />
    //     </div>
    //   ))}
    //   <br />
    //   <div style={{height:'40px',background: 'red'}}>{ add(a, b)}</div>
    // </div>
  );
}
function Child() {
  return (
    <div>child</div>
  )
}

export default App;
