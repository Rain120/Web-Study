// 全排列
function Permutations (target, size, origin) {
    var _arr = []
    function getArrange(target, nums, ret) {
        if (nums === 1) {
            for (var i = 0; i < target.length; i++) {
                var tmp = ret.slice();
                tmp.push(target[i]);
                _arr.push(tmp);
            }
        } else {
            nums -= 1;
            for (var i = 0; i < target.length; i++) {
                var tmp = ret.slice();
                var newTarget = target.slice();
                tmp.push(target[i]);
                newTarget.splice(i, 1);
                getArrange(newTarget, nums, tmp);
            }
        }
    }
    getArrange(target, size, origin);
    return _arr;
}
Permutations([1, 2, 3], 2, [])

// 排列组合
function Permutations (arr, size) {
  var ret = [];

  function getRet(origin, target, size) {
    if (size === 0) {
      ret[ret.length] = origin;
      return;
    }
    for (var i = 0; i <= target.length - size; i++) {
      var tmp = origin.slice();
      tmp.push(target[i]);
      getRet(tmp, target.slice(i + 1), size - 1);
    }
  }
  getRet([], arr, size);
  return ret;
}
Permutations([1, 2, 3, 4], 3)
