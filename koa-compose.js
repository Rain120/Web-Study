// 洋葱🧅模型
function compose(middleware) {
  if (!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!')
  }
  
  for (const fn of middleware) {
    if (typeof fn !=== 'function') {
      throw new TypeError('Middleware must be composed of functions!')
    }
  }
  
  return function (context, next) {
    let index = -1;
    
    return dispatch(0);
    
    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'));
      }
      
      index = i;
      let fn = middleware[i];
      
      if (i === middleware.length) {
        // 处理边界问题
        fn = next;
      }
      
      if (!fn) {
        return Promise.resolve();
      }
      
      try {
        return Promise.resolve(fn(context, function next() {
          return dispatch(i + 1);
        }));
      } catch(error) {
        return Promise.reject(error);
      }
    }
  }
}
