/**
 * 用于处理 url 的 utils
 */

let urlUtils = {
  // reg
  paramStr(params = {}) {
    let query = JSON.stringify(data)
      .replace(/:/g, "=")
      .replace(/"/g, "")
      .replace(/,/g, "&")
      .match(/\{([^)]*)\}/);

    return query[1];
  },
  // custom
  customParamStr(params = {}) {
    delete params[""];
    let res = JSON.stringify(params);
    let arr = res.split("&");
    let keyIndex = arr.findIndex(x => x.startsWith("_k="));
    if (keyIndex >= 0 && keyIndex !== arr.length - 1) {
      let tmp = arr[keyIndex];
      arr.splice(keyIndex, 1);
      arr.push(tmp);
    }
    let query = arr.join("&");
    return query ? `?${query}` : "";
  },
  // url 字符串解析为 Object
  parseUrl(url) {
    var a = document.createElement("a");
    a.href = url;
    return {
      source: url,
      protocol: a.protocol.replace(":", ""),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (() => {
        var ret = {},
          querys = [];
        var searchQuery = a.search.replace(/^\?/, "").split("&");
        for (var i = 0; i < searchQuery.length; i++) {
          if (searchQuery[i]) {
            querys = searchQuery[i].split("=");
            ret[querys[0]] = querys[1];
          }
        }
        return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
      hash: a.hash.replace("#", ""),
      path: a.pathname.replace(/^([^\/])/, "/$1"),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
      segments: a.pathname.replace(/^\//, "").split("/")
    };
  }
};

export default urlUtils;
