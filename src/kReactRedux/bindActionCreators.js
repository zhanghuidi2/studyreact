function bindActionCreator(creator, dispatch) {
  // creator = () => ({ type: 'ADD' })
  // () => dispatch({type: 'ADD'}) // dispatch里面是creator的运行结果,creator是一个匿名函数
  return (...arg) => dispatch(creator(...arg))
}
function bindActionCreators(creators, dispatch) {
  // creators = {
  //   add: () => ({ type: 'ADD' }),
  //   minus: () => ({type: 'MINUS'})
  // }
  const obj = {}
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}
export default bindActionCreators

