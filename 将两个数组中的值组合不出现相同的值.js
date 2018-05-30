/*
 * 给一个数组如：[['a', 'b', 'c'], ['a', 'e']]输出['ae', 'ba', 'be', 'ca', 'ce']
 */
var compose = function(arr) {
	var ret = [];
	for (var i = 0; i < arr[0].length; i++) {
		for(var j = 0; j < arr[1].length; j++) {
			ret.push(arr[0][i] + arr[1][j])
		}
	}
	return ret;
}
compose([['a', 'b', 'c'],['d', 'e']])
