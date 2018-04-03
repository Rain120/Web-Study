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

var s = 'asd-fgh-jkl'
capitalize1(s)
