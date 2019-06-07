// setInterval 虽然时间上设置的是1s，但实际执行，并不是真正意义上的1s，所以长时间或者在其他环境下可能会受到影响
// requestAnimationFrame 则是通过帧数来计算时间, 1000 / 60 = 16.667

// 60s
var last_time = new Date().getTime();
var count = 1;
var countDownId = null;
var countDown = () => {
    if (new Date().getTime() - last_time >= 1000) {
        count++;
        if (count > 60) {
            count = 1;
        }
        console.log(count)
        last_time = new Date().getTime();
    }
	countDownId = window.requestAnimationFrame(countDown);
};
countDownId = window.requestAnimationFrame(countDown);
