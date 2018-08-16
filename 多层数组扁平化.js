function flat(arr) {
  return arr.toString().split(',').map(item => +item);
}
var arr = [[2],[[1,[2,3],2,5],[1],[2]],3,4];
flat(arr) // [2, 1, 2, 3, 2, 5, 1, 2, 3, 4]
