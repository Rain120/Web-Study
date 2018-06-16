var arr = [1, 2, 3]
var _arr = []
function getArrange(arr, selectNum, selectedArr) {
    if (selectNum === 1) {
        for (var i = 0; i < arr.length; i++) {
            var newSelectedArr = selectedArr.slice();
            newSelectedArr.push(arr[i]);
            _arr.push(newSelectedArr);
        }
    } else {
        selectNum -= 1; //剩余选择的减一
        for (var i = 0; i < arr.length; i++) {
            var newSelectedArr = selectedArr.slice();
            var newArr = arr.slice();
            newSelectedArr.push(arr[i]);
            newArr.splice(i, 1); //删除push进去的那一个
            getArrange(newArr, selectNum, newSelectedArr);
        }
    }
    return _arr;
}
getArrange(arr, 2, [])
