
// 函数式编程分成合成（compoes）和 柯里化（currying）
// 合成就是把一些函数合成起来的过程，比如redux的中间件
// 柯里化就是把参数单一化，可以单独抽离, 还可以利用闭包，将数据缓存下来

// add

function add(x, y) {
  return x + y
}

// 这样的话我调用的时候必须直接传入两个参数

console.log(add(1, 2)) // 3


// 柯里化之后

function add2(x) {
  return function (y) {
    return x + y
  }
  
}

// 这里第一次调用的时候会形成闭包，因为访问了局部的x,并且在函数内部访问了x

console.log(add2(1)(2)) // 3

const sum = add2(1) // 这里返回一个返回一个函数，并且函数访问了局部变量x,那么形成闭包缓存下来x

const sum2 = add2(10) // 这里返回一个返回一个函数，并且函数访问了局部变量x,那么形成闭包缓存下来x

const sum3 = sum(2)

const sum4 = sum2(20)

console.log(sum3) // 1+2=3
console.log(sum4) // 10+20=30

// 柯里化的双箭头函数写法

// const add3 = (x) => {
//   // 第一次简化
//   // return function (y) {
//   //   return x + y
//   // }

//   // 第二次简化
//   // return (y) => x + y
// }
// 最后的简化

const add3 = x => y => x + y
console.log(add3(1)(2))