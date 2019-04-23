// 详见[shuffle](https://bost.ocks.org/mike/shuffle/)

function shuffle(arr) {
    var n = arr.length, random;
    while(0 != n){
        random =  (Math.random() * n--) >>> 0;
        // 1
        t = array[random];
        array[n] = array[random];
        array[random] = t;
        // 2
        [arr[n], arr[random]] = [arr[random], arr[n]];
    }
    return arr;
}

// sort方法
function shuffle(arr) {
  return arr.sort(() => {
    return 0.5 - Math.random();
  });
}

// test
shuffle([1, 2, 3, 4, 5]);
