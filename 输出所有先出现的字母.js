/*
 * var str = 'ABDCABC'
 * 输出AABBDCC
 * 思路：当输出结果是按照字母的ASCII值来排列的话，可以使用排序算法；
 *      当输出结果是按照先出现的来排列的话，使用对象，详见下列代码：
 */
function print(s, num) {
    var ret = '';
    for (var i = 0; i < num; i++) {
        ret += s;
    }
	return ret
}
function sortNotSuquent(str) {
    var s = str.split('')
    var obj = {};
    for(var i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    var ss = [...new Set(s)];
    var ret = '';
    Object.keys(obj).forEach(function(item) {
        ret += print(item, obj[item])
    })
    return ret;
}
sortNotSuquent("ABDCABC")
