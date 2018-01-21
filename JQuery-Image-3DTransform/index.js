var oLi = $('li');
var arr = [];
// 将具有length属性的对象转成数组
Array.prototype.slice.call(oLi, 0).forEach(function(item, index) {
    arr.push(update(item));
    bindEvents(item, index);
});
//将类数组变成数组
console.log(arr);
//获得每一个元素的初始大小位置状态，存在数组里
function update(item) {
    return {
        w: item.offsetWidth,
        h: item.offsetHeight,
        l: item.offsetLeft,
        t: item.offsetTop
    }
}
//鼠标移入移出事件
function bindEvents(item, index) {
    $(item).on('mouseenter', function(e) {
        addClass(e, item, 'in', index);
        return false;
    })
    $(item).on('mouseleave', function(e) {
        addClass(e, item, 'out', index);
        return false;
    })
}
//添加类名
function addClass(e, item, state, index) {
    var direction = getDirection(e, index);
    var class_suffix = '';
    switch (direction) {
        case 0:
            class_suffix = '-top';
            break;
        case 1:
            class_suffix = '-right';
            break;
        case 2:
            class_suffix = '-bottom';
            break;
        case 3:
            class_suffix = '-left';
            break;
    }
    item.className = '';
    console.log(state + class_suffix);
    item.classList.add(state + class_suffix);
};
//获得上下左右方向0,1,2,3
function getDirection(e, index) {
    var w = arr[index].w,
        h = arr[index].h,
        x = e.pageX - arr[index].l - w / 2,
        y = e.pageY - arr[index].t - h / 2;
    // 取到x,y两点坐标
    d = (Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    console.log(d)
    return d; //d的数值用于判断方向上下左右。
};