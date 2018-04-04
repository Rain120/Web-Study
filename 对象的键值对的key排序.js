// 根据对象的键值对的key排序

function objSortByKey (obj) {
	var newKey = Object.keys(obj).sort();
	var newObj = {};
 	for (var i in newKey) {
		newObj[newKey[i]] = obj[newKey[i]];
    }
	return newObj;
}
var obj = {
	js: 'Javascript',
	html: 'HTML',
	vue: 'Vue',
	react: 'React',
	css: 'CSS'
};
objSortByKey(obj);
