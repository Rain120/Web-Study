/*
* 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
* 1. rgb 中每个 , 后面的空格数量不固定
* 2. 十六进制表达式使用六位小写字母
* 3. 如果输入不符合 rgb 格式，返回原始输入
*/

function rgb2hex(sRGB) {
    return sRGB.replace(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/, function($0, $1, $2, $3) {
		  if (($1 >= 0&& $1 <= 255) && ($2 >= 0&& $2 <= 255) && ($3 >= 0&& $3 <= 255)) {
        return '#' + toHex($1) + toHex($2) + toHex($3)
      } else {
			  return $0
      }
    })
}
function toHex(str) {
	console.log((+str).toString(16))
	return ('0'+(+str).toString(16)).slice(-2);	
}
rgb2hex('rgb(255, 255, 255)')

/*
 * rgba -> { hex, hexa }
 * (255, 0 , 255, 1) -> { hex: '#ff00ff', hexa: '#ff00ffff' }
 */
function rgba2hex(orig) {
  var a,
    rgb = orig.replace(/\s/g, '').match(/^(rgba|rgb)?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  a = alpha !== "" ? alpha : '01';

  a = ((a * 255) | 1 << 8).toString(16).slice(1);

  return {
	hex: '#' + hex,
	hexa: '#' + hex + a,
  };
}
