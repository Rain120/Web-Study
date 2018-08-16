// 1
function deepClone(origin, target) {
    var target = target || {};
    for(var key in origin) {
        if(origin.hasOwnProperty(key)) {
            if(Array.isArray(origin[key])) {
                target[key] = [];
                deepClone(origin[key], target[key]);
            } else if (typeof origin[key] === 'object' && origin[key] !== null) {
                target[key] = {};
                deepClone(origin[key], target[key]);
            }
            target[key] = origin[key];
        }
    }
    return target;
}
// 2
function type(obj) {
	var typeString = Object.prototype.toString.call(obj);
	return typeString.slice(8, typeString.length - 1);
}
function deepClone(origin, target) {
    var target = target || {};
    for(var key in origin) {
        if(origin.hasOwnProperty(key)) {
            target[key] = type(origin[key]) === 'Array' ?
              deepClone(origin[key], []) :
              type(origin[key]) === 'Object' ? deepClone(origin[key], {}) : origin[key];
        }
    }
    return target;
}
// 3
function deeoClone(origin, target) {
  return Object.assign(target, JSON.parse(JSON.stringify(origin)));
}

var origin = {
	'a': [1,2,3],
	'b': {
		'c': 123,
		'd': undefined
    }
}
var target = {'e': 'Rainy', 'f': {}}
deepClone(origin, target);
