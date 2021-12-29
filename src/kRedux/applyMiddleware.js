function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    // todo 加强dispatch
    let midApi = {
      getState: store.getState,
      dispatch: (actions, ...arg) => dispatch(actions,  ...arg)
    }
    const middlewareChain = middlewares.map(middleware => middleware(midApi))
    dispatch = compose(...middlewareChain)(store.dispatch)
    return {...store, dispatch};
  }
}


const compose = (...fn) => {
  if (fn.length == 1) {
    return fn[0]
  }
  return fn.reduce((a, b) => (...arg) => a(b(...arg)))
}

export {
  applyMiddleware
}

// store.dispatch((dispatch, actions) => {
//   setTimeout(() => {
//     dispatch({type: 'ADD'})
//   }, 1000)
// })

function thunk({ getState, dispatch }) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}