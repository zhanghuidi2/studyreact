// 累加器
const arr = [1, 2, 3, 4]
arr.reduce((total, item) => (total + item), 1)

// json去重
const arr1 = [
  {name: '小明', age: 16},
  {name: '小明', age: 18},
  {name: '小明', age: 16}
]
const obj = {}
arr1.reduce((total, item) => {
  !obj[item.age] && total.push(item) && (obj[item.age] = true)
  return total // return给下一次循环
},[])

// 计算数组里不同数据出现的次数
const arr2 = [1, 1, 2, 3, 3, 3, 3, 4, 4, 5, 5]

arr2.reduce((total, item) => {
  total[item] ? total[item] += 1 : (total[item] = 1)
  return total // return给下一次循环
}, {})

// 计算数组里出现的最大数据
const arr3 = [1, 3, 4, 6, 7]
arr3.reduce((total, item) => {
  return total = total > item ? total : item
})

// 函数式编程合成compoes

function f1(args) {
console.log('f1', args);
}

function f2(args) {
  console.log('f2', args);
}

function f3(args) {
  console.log('f3', args);
}

// 需要依次执行这些函数，并且拿到上一个函数的执行结果当第二个函数的参数
f1('oh~~')
f2('oh~~')
f3('oh~~')

// 嵌套

f1(f2(f3('oh~~')))

// 合成

// 数组的reduce,第一个参数是上一轮计算的结果total，第二个参数是item,初始值写有就是第一个total的数据，如果没写total就是第一个item

// 小知识，如果一个函数接受的参数是一个函数。并且返回的结果就是这个函数

function test(f) {
  return f
}
const test1 = test(f1)
// console.log(test1('oh!!!!')); // 这时候打印的是oh!!!!
// 那我现在直接打印

console.log(test(f1)('oh!!!!')) // 和上面打印的结果是一样的

// 那么我能在test函数里面拿到将来传给f的参数吗？


function testFun(f) {
  return (...args) => { 
    console.log(...args) // 这里的写法就是给一个匿名函数，然后返回参数的那个函数f，然后参数依旧给f
    return f(...args)
  }
}
console.log(testFun(f1)('oh!!!!')) // 和上面打印的结果是一样的

// 正式的合成函数

function compoes(...fun) {
  // 使用扩展符号拿到的是一个数组

  // 如果没有任何的fun,那么将用户的第二个参数返回出去,参考上面的例子，返回一个匿名函数
  if (fun.length == 0) {
    return (arg) => arg // 用户如果没有传入任何函数，只传入了函数的参数，那么就直接返回就行
  }
  // 如果就一个函数，那么不需要聚合
  if (fun.length == 1) {
    return fun[0]
  }
  // return fun.reduce((a, b) => {
  //   return (...arg) => {
  //     return a(b(...arg))
  //   }
  // })
  
  // 双箭头函数
  return fun.reduce((a, b) => (...arg) => a(b(...arg)))
}
compoes(f1)()

// 中间件那里的逻辑
function dispatch(action) {
  console.log('dispatch', action)
}
function applyMiddle(...arg) {
  // arg = [thunk, logger]
  const api = {
    getState: 1,
    dispatch: (...s) => dispatch(...s)
  }
  // arg是数组，map之后得到新的数组，所以argChain是一个新的数组，数组里面放的都是每一个arg的item并且传入了参数，但是这里并没有调这些方法，而是返回了匿名函数
  // argChain= [
  // function(api) {
  //     return arg[0](api)
  //   },
  // function(api) {
  //     return arg[1](api)
  //   }
  // ]
  argChain = arg.map((ware) => () => ware(api))
  const dispatch = compoes(...argChain)(dispatch)
  return {dispatch}
}

// 中间件thunk
function thunk({ getState, dispatch }) {
  // // 这里要返回函数，不然第93行换入的参数dispath都没法接受了
  return (arg1) => {
    // 因为arg1里面也是一个函数,就是action
    return (arg2) => {
      if (typeof arg2 == 'function') {
        return arg2({ getState, dispatch })
      }
      return arg1(arg2)
    }
  }

}

// 在课件中用了next和action

// 调用
applyMiddle(thunk)


