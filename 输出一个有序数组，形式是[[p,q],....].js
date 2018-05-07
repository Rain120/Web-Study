/**
* 输入一个数组，输出一个有序数组，形式是[[p,q],....]
* p是数组中任意元素的质因子，
* q是所有能整除质因子的数的总和
**/

function PrimeFactor(n) { 
	var ret = []
	for (var i = 2; n > 1; ++i) {
        if (n % i == 0) {
            n /= i;
            ret.push(i)
            while (n % i == 0) {
                n /= i;
            }
        }
    }
    return ret;
}
function fn(arr){
    var p = [];
    var ret = [];
    arr.forEach(function(item) {
        var t = PrimeFactor(item)
        for (var i = 0; i < t.length; i++) {
            if(p.indexOf(t[i])) {
                p.push(t[i])
            }
        }
    })
	p = p.filter(function (el, i, arr) {
		return arr.indexOf(el) === i;
	});
	p.sort(function(a, b) {
		return a - b;
	})
	console.log(p)
    for (var i = 0; i < p.length; i++) {
        var val = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] % p[i] === 0) {
                val += arr[j];
            }
        }
        ret.push([p[i], val])
    }
	return [].slice.call(ret)
}
fn([10, 15, 50])
