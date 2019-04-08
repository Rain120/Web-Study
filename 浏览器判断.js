/*
 * Chrome: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
 * FireFox: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0
 * Opera: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36 OPR/41.0.2353.56
 * Safari: mozilla/5.0 (windows; u; windows nt 5.1; zh-cn) applewebkit/533.16 (khtml, like gecko) version/5.0 safari/533.16
 * 
 * IE系列
 * IE 8: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/8.0; .NET4.0C; .NET4.0E; InfoPath.3; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
 * IE9: Mozilla/5.0 (compatible; MSIE 9.0; InfoChannel RNSafeBrowser/v.1.1.0G)
 * IE 10： Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.3; WOW64; Trident/6.0)
 * IE 11: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; InfoPath.3; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko
 * Edge: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240
 *
 */
// getBrowserName
 function getBrowserName(){
  var userAgent = navigator.userAgent;
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    return 'Opera';
  } else if (userAgent.includes("compatible") && userAgent.includes("MSIE")) {
    return 'IE';
  } else if (userAgent.includes("Edge")){
    return 'Edge';
  } else if (userAgent.includes("Firefox")){
    return 'Firefox';
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    return 'Safari';
  } else if (userAgent.includes("Chrome") && userAgent.includes("Safari")) {
    return 'Chrome';
  } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return 'IE>=11';
  } else {
    return 'Unkonwn Name';
  }
}
getBrowserName();

// getBrowserVersion
function getBrowserVersion(){
  var browser = {};  
  var UA = navigator.userAgent.toLowerCase();
  var s;  
  (s = UA.match(/rv:([\d.]+)\) like gecko/)) ? browser.ie = s[1] :
  (s = UA.match(/msie ([\d\.]+)/)) ? browser.ie = s[1] :  
  (s = UA.match(/edge\/([\d\.]+)/)) ? browser.edge = s[1] :
  (s = UA.match(/firefox\/([\d\.]+)/)) ? browser.firefox = s[1] :  
  (s = UA.match(/(?:opera|opr).([\d\.]+)/)) ? browser.opera = s[1] :  
  (s = UA.match(/chrome\/([\d\.]+)/)) ? browser.chrome = s[1] :  
  (s = UA.match(/browser\/([\d\.]+).*safari/)) ? browser.safari = s[1] : 0;
  
  if (browser.ie) { return ('IE: ' + browser.ie); }
  if (browser.edge) { return ('Edge: ' + browser.edge); }
  if (browser.firefox) { return ('Firefox: ' + browser.firefox); } 
  if (browser.chrome) { return ('Chrome: ' + browser.chrome); }
  if (browser.opera) { return ('Opera: ' + browser.opera); }
  if (browser.safari) { return ('Safari: ' + browser.safari); }
  return 'Unkonwn Version';
}
getBrowserVersion();

var Browser = (function(window) {
  var agent = window.navigator.userAgent;
  const IE10 = 'IE10'; //IE10及以下
  const IE11 = 'IE11';
  const Edge = 'Edge';
  const Opera = 'Opera';
  const Chrome = 'Chrome';
  const Firefox = 'Firefox';
  const Safari = 'Safari';
  var System = {
    type: '',
    version: '',
    getIe10Version: function() {
      try {
        return agent.match(/MSIE ([\d.]+)/)[1] || '0';
      } catch (e) {
        console.log(e);
        return '0';
      }
    },
    operaVersion: function() {
      try {
        if (agent.indexOf('Opera') > -1) {
          return agent.match(/Opera.([\d.]+)/)[1];
        } else {
          return agent.match(/OPR\/([\d.]+)/)[1];
        }
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
    //描述:version过滤.如31.0.252.152 只保留31.0
    versionFilter: function() {
      if (arguments.length === 1 && typeof arguments[0] === 'string') {
        var version = arguments[0];
        var start, end;
        start = version.indexOf('.');
        if (start > 0) {
          end = version.indexOf('.', start + 1);
          if (end !== -1) {
            return version.substr(0, end);
          }
        }
        return version;
      } else if (arguments.length === 1) {
        return arguments[0];
      }
      return 0;
    },
  } as any;

  try {
    // 检测浏览器类型
    if (/MSIE/.test(agent)) {
      System.type = IE10;
    } else if (/rv:([\d.]+)\) like gecko/.test(agent.toLowerCase())) {
      System.type = IE11;
    } else if (agent.indexOf('Edge') > -1) {
      System.type = Edge;
    } else if (agent.indexOf('Opera') > -1 || agent.indexOf('OPR') > -1) {
      System.type = Opera;
    } else if (agent.indexOf('Chrome') > -1 && agent.indexOf('Safari') > -1) {
      System.type = Chrome;
    } else if (agent.indexOf('Safari') > -1 && agent.indexOf('Chrome') === -1) {
      System.type = Safari;
    } else if (agent.indexOf('Firefox') > -1) {
      System.type = Firefox;
    } else {
      System.type = 'unknow';
    }
    // 版本号
    switch (System.type) {
      case IE10:
        System.version = System.getIe10Version();
        break;
      case IE11:
        System.version = '11';
        break;
      case Edge:
        System.version = 'edge';
        break;
      case Firefox:
        System.version = agent.match(/Firefox\/([\d.]+)/)[1];
        break;
      case Chrome:
        System.version = agent.match(/Chrome\/([\d.]+)/)[1];
        break;
      case Opera:
        System.version = System.operaVersion();
        break;
      case Safari:
        System.version = agent.match(/Version\/([\d.]+)/)[1];
        break;
      default:
        System.version = '0';
    }
    System.version = System.versionFilter(System.version);
    //不支持的浏览器
    if (System.type === IE10) {
      alert(
        'Sorry, your current browser version is low, you can use IE11 or higher version of the browser, in order to get a better experience,' +
          ' we strongly recommend that you use Chrome Browser'
      );
    }
  } catch (e) {
    console.log(e);
  }
})(window);
