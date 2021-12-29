const createStore = (reducer, enhancer) => {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let callbacks = []
  let state;
  const getState = () => {
    return state
  }
  const dispatch = (actions) => {
    state = reducer(state, actions)
    // 更新组建
    callbacks.forEach(listener => listener() )
  }
  const subscribe = (cb) => {
    callbacks.push(cb)
    return () => {
      const index = callbacks.filter(fn => fn == cb)
      callbacks.splice(index, 1)
    }
  }
  dispatch({type: 'XXXXXXXXXXX'})
  return {
    getState,
    dispatch,
    subscribe
  }
}
export {
  createStore
}