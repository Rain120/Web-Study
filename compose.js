// 从右到左合成函数
function compose() {
  const args = Array.prototype.slice.call(arguments);
  const len = args.length;
  let index = len;
  
  while(index--) {
    if (typeof args[index] !== 'function') {
      throw new TypeError(`${args[index]} must be a function in params of ${index}`)
    }
  }
  
  return function () {
    let last = len - 1;

    // 如果存在两个及以上参数，则调用最后一个参数函数，并传入内层函数；否则直接返回第 1 个参数函数。
    let result = len > 0
      ? args[last].apply(this, arguments)
      : args[0];
      
    while (last--) {
        // 把右侧函数的执行结果作为参数传给左侧参数函数，并调用。
        result = args[last].call(this, result);
    }
    
    return result;
  }
}

// 从左到右合成函数
function composeLeft() {
  return compose.apply(null, [].reverse.call(arguments));
}

// test
var add = function (x) { return x + 5; }
var mul= function (x) { return x * 5; }
var sub= function (x) { return x - 5; }
var div = function (x) { return x / 5; }
var fn = compose(add, mul, sub, div);
console.log(fn(50));  // 30
var fn = compose(add, compose(mul, sub, div));
console.log(fn(50));  // 30
var fn = compose(compose(add, mul), sub, div);
console.log(fn(50));  // 30

var fn1 = composeLeft(add, mul, sub, div);
console.log(fn1(50));  // 54
var fn1 = composeLeft(add, compose(mul, sub, div));
console.log(fn1(50));  // 30
var fn1 = composeLeft(compose(add, mul), sub, div);
console.log(fn1(50));  // 50
