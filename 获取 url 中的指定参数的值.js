// void 0 return undefined

// 1 
// str: 模式的匹配项；key: 第一个捕获组的匹配项；value: 第二个捕获组的匹配项。
function getUrlParam(sUrl, sKey){
    var result = {};
    sUrl.replace(/\??(\w+)\s?=\s?(\w+)&?/g, function(str, key, value){
        if(result[key] !== undefined | void 0){
            result[key] = [].concat(result[key], value);
        }else{
            result[key] = value;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}
// 2
function getUrlParam(sUrl, sKey) {
  var url = sUrl.slice(sUrl.indexOf('?') + 1, sUrl.indexOf('#')).split('&')
  var ret, obj = {};
	for (var i in url) {
		var arr = url[i].split('=') 
    obj[arr[0]] === void 0 ? obj[arr[0]] = arr[1] : obj[arr[0]] = [].concat(obj[arr[0]], arr[1])
  }
  sKey === void 0 ? ret = obj : ret = obj[sKey]
	console.log(ret)
	return ret
}
getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key')

// 3 
function getUrlParam(sUrl, sKey) {
  var url = sUrl.slice(sUrl.indexOf('?') + 1, sUrl.indexOf('#')).split('&')
  var ret, obj = {};
	for (var i in url) {
		var arr = url[i].split('=') 
		if (obj[arr[0]] !== void 0) {
			obj[arr[0]] = [].concat(obj[arr[0]], arr[1])
        } else {
            obj[arr[0]] = arr[1]
        }
    }
    if (sKey === void 0) {
        ret = obj
    } else {
        ret = obj[sKey] || ''
    }
	console.log(ret)
	return ret
}
