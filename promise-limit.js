// 实现一个并发限制功能
function pLimit(arr, limit, callback) {
  const promises = [];
  const executing = [];
  let index = 0;
  
  const enquene = () => {
    if (index === arr.length) {
      return Promise.resolve();
    }
    
    const item = arr[index++];

    const p = Promise.resolve().then(() => {
      callback && callback(item, arr);
    });
    promises.push(p);
    
    const e = p.then(() => {
      const exeIndex = executing.indexOf(e);
      
      exeIndex > -1
          ? executing.splice(exeIndex, 1)
          : Promise.resolve();
    });
    executing.push(e);
    
    let r = Promise.resolve()
    
    if (executing.length >= limit) {
      r = Promise.race(executing);
    }
    
    return r.then(() => enquene());
  };
  
  return enquene.then(() => Promise.all(promises));
}

// test

const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(5000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const ajax4 = () => timeout(6000).then(() => {
    console.log('4');
    return 4;
});

const ajax5 = () => timeout(2000).then(() => {
    console.log('5');
    return 5;
});

const ajax6 = () => timeout(2000).then(() => {
    console.log('6');
    return 6;
});

pLimit(
    [ajax1, ajax2, ajax3, ajax4, ajax5, ajax6],
    3,
    (item) => {
        item();
    }
);
