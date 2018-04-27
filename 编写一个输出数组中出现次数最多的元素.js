function findMost(arr) {
    if (!arr.length) return
    if (arr.length === 1) return 1
    var res = {}
    // 遍历数组
    for (var i=0,l=arr.length;i<l;i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1
        } else {
            res[arr[i]]++
        }
    }
	console.log(res)
    // 遍历 res
    var keys = Object.keys(res)
    var maxNum = 0, maxEle
    for (var i=0,l = keys.length;i<l;i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]]
            maxEle = keys[i]
        }
    }
    return maxEle
}
findMost([1, 2, 3, 1, 2, 5, 6, 6, 7, 4, 3, 2, 1, 4, 8, 1, 5])
