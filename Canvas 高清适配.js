// 参考： https://phoboslab.org/log/2012/09/drawing-pixels-is-hard
// 参考： http://www.html5rocks.com/en/tutorials/canvas/hidpi/
function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

/**
 * 
 * backingStorePixelRatio: 该属性的值决定了浏览器在渲染 canvas 之前会用几个像素来来存储画布信息。
 **/

function setupCanvas (canvas) {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const backingStorePixelRatio =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;

  const ratio = dpr / backingStorePixelRatio;
  if (dpr !== backingStorePixelRatio) {
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;

    canvas.style.width = `${oldWidth}px`;
    canvas.style.height = `${oldHeight}px`;
    ctx.scale(ratio, ratio);
  }
}
