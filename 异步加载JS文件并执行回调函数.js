// 异步加载JS文件并执行回调函数

function loadJS(url, callback) {
  var script = document.createElement('script');
  var head = getElementsByTagName('head')[0];
  var loaded;
  script.src = url;
  if (typeof callback === 'function') {
    script.onload = script.onreadystatechange = function () {
      if (!loaded && (!script.readyState || /loaded|complete/.test(script.readyState))) {
        script.onload = script.onreadystatechange = null;
        loaded = true
        callback();
      }
    }
  }
  head.appendChild(script);
}
loadJS('test.js', function() {
  console.log('callback');
});
