/*
 * @Author: Rain120
 * @LastEditors: Rain120
 * @Date: 2019-04-04 15:06:58
 * @LastEditTime: 2019-04-04 16:48:29
 */

/**
 * @description hasCookie
 * @date 2019-04-04
 * @param {*} name
 * @returns
 */
function hasCookie (name) {
  return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(name).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
}
/**
 * @description getCookie
 * @date 2019-04-04
 * @param {*} name
 * @returns
 */
function getCookie (name) {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr !== null) {
    return unescape(arr[2])
  }
  return null
}

/**
 *
 * @description setCookie
 * @date 2019-04-04
 * @param {*} name cookie name
 * @param {*} value cookie value
 * @param {*} options cookie options
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
 * @options_value end, path, domain, secure,
 */
function setCookie (name, value, options) {
  let attributes = ''
  for (let key in options) {
    if (key.toLowerCase() === 'secure') {
      let secure = (typeof options[key]).toLowerCase() === 'boolean' ? options[key] ? `; ${key}` : '' : "; key = ''"
      attributes += secure
    } else if (key.toLowerCase() === 'expires') {
      attributes += `; ${key} = ${options[key].toGMTString()}`
    } else {
      attributes += `; ${key} = ${options[key]}`
    }
  }
  console.log(attributes)
  document.cookie = `${encodeURIComponent(name)} = ${encodeURIComponent(value)}${attributes}`
}

/**
 * @description deleteCookie
 * @date 2019-04-04
 * @param {*} name
 */
function deleteCookie (name) {
  // setCookie(name, "", { expires: -1 })
  document.cookie = `${name} = ; expires = ${new Date(0)}`
}

export {
  hasCookie,
  getCookie,
  setCookie,
  deleteCookie
}

/**
 * 设置cookie
 * @param {string} name  键名
 * @param {string} value 键值
 * @param {integer} days cookie周期
 */
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
        var expires = `; expires = ${date.toGMTString()}`;
    }else{
        var expires = "";
    }
    document.cookie = `name = ${value}${expires}; path=/`;
}
// 获取cookie
function getCookie(name) {
    var nameEQ = `${name}=`;
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
          return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}
// 删除cookie
function deleteCookie(name) {
    setCookie(name, "", -1);
}
