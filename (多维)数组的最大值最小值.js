/*
 * question：一维数组，多维数组找出某列的最大值、最小值
 * answer：我的思路是扁平化，在通过一维数组查找结果
 */

var flattenArr = (arr, index) => {
  let fa = [];
  arr.map(item => fa.push(item[index]));
  return fa;
}
var min = Math.min.apply(null, flattenArr([[5, 6, 4], [1, 2, 6], [3, 4, 8]], 2));
var max = Math.max.apply(null, flattenArr([[5, 6, 4], [1, 2, 6], [3, 4, 8]], 2));
console.log(max, min);
