// curry(fn)(1)(2)(3)
// curry(fn)(1)(2, 3)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
// 当接受的函数形参数和传入
// 确定参数个数
function curry(fn, ...rest) {
  const functionParamsLen = fn.length;

  return (...args) => {
    args = rest.concat(args);

    if (args.length >= functionParamsLen) {
      return fn.apply(null, args);
    } else {
      return curry(fn, ...args);
    }
  }
}
// 确定参数
const add = curry((a, b, c) => a + b + c);

console.log(add(1, 2, 3))
console.log(add(1, 2)(3))
console.log(add(1)(2)(3))

// 不确定参数个数
function curryInfinity(fn) {
    let parmas = [];

    const curried = (...args) => {
        if(args.length){
            parmas = [...parmas,...args]
            return curried
        }

        return fn.apply(null, parmas)
    }

    curried.toString = () => {
      return fn.apply(null, parmas);
    }

    return curried;
}
function add(...arr){
   return arr.reduce((acc,item)=>{
        return acc+item
    })
}
 
let curried = curryInfinity(add)
console.log(curried(1)(2)(3)(4)(10,20)())

