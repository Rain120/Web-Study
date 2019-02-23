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
