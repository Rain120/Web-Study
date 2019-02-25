/**
 * @param parent 父容器元素
 * @param target 滚动的目标元素
 * @param time 滚动时间 ms
 */
export function targetScrollTo(parent, target, time) {
  let pos = getRelativePos(target);
  scrollTo(parent, pos.top, time, () => {
    console.log('Scroll End');
  });
}

function getRelativePos(element) {
  let parentPos = element.parentNode.getBoundingClientRect(), // parent pos
    targetPos = element.getBoundingClientRect(), // target pos
    pos = {} as any;
  (pos.top = targetPos.top - parentPos.top + element.parentNode.scrollTop),
    (pos.right = targetPos.right - parentPos.right),
    (pos.bottom = targetPos.bottom - parentPos.bottom),
    (pos.left = targetPos.left - parentPos.left);
  return pos;
}

function easeInOutQuad(time) {
  return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
}

function scrollTo(element, to, duration, onDone?) {
  let start = element.scrollTop,
    change = to - start,
    startTime = performance.now(),
    now,
    elapsed,
    scrollTime;

  function animateScroll() {
    now = performance.now();
    elapsed = now - startTime;
    scrollTime = elapsed / duration;

    element.scrollTop = start + change * easeInOutQuad(scrollTime);

    if (scrollTime < 1) {
      window.requestAnimationFrame(animateScroll);
    } else {
      onDone && onDone();
    }
  }
  animateScroll();
}
