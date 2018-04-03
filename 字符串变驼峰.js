// asd-fgh-jkl ===>asdFghJkl 小驼峰
function firstUpperCase(str) {
  return str.toLowerCase().replace(/^\S/g,function(s){return s.toUpperCase();});
}
function capitalize1(s) {
  var ret = s.split('-')[0]
  for (var i = 1; i < s.split('-').length; i++) {
    ret += firstUpperCase(s.split('-')[i]);
  }
  return ret
}
function capitalize2(s) {
  var ret = '';
  for (var i = 0; i < s.split('-').length; i++) {
    ret += firstUpperCase(s.split('-')[i]);
  }
  return ret
}
// 现在又出现了新需求，将[A-Z]改为[_a - _z]
function formatStr(str) {
	return str.toLowerCase().replace(/^\S/g,function(s){return '_' + s.toLowerCase();});
}
function setFormat(str) {
  var ret = ''
  for (var i in str) {
    if (/[A-Z]/.test(str[i])) {
      ret += formatStr(str[i])
      } else {
      ret += str[i];
      }
  }
  return ret;
}

var s = 'asd-fgh-jkl'
capitalize1(s)
setFormat(capitalize1(s))
