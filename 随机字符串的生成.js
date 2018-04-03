/**
 * 实现指定个数的随机生成[a-zA-Z],[0-9],或者自定义是字符串
 **/
 // 不加自定义字符
 function randomStr(len) {
  var ret = '';
  var randomChar = function () {
    var str = Math.floor(Math.random() * 62);
    if (str < 10) {
      return str; // 0-9
    } else if (str < 36) {
      return String.fromCharCode(str + 55); //A-Z
    } else {
      return String.fromCharCode(str + 61); // a-z
    }
  }
  while (ret.length < len) {
    ret += randomChar();
  }
  return ret;
 }

//加上自定义字符
function randomStr(len, charSet) {
  var ret = '';
  var charSetLen = 62 + charSet.length;
  var randomChar = function () {
    var str = Math.floor(Math.random() * charSetLen);
    if (str < 10) {
      return str; // 0-9
    } else if (str < 36) {
      return String.fromCharCode(str + 55); //A-Z
    } else if (str < 62) {
      return String.fromCharCode(str + 61); // a-z
    } else {
        return charSet[charSetLen - str - 1]
    }
  }
  while (ret.length < len) {
    ret += randomChar();
  }
  return ret;
 } 
