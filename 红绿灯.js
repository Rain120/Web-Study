//用js写一个简单的交通灯功能，10秒绿灯倒数，3秒黄灯倒数，5秒红灯倒数，如何让三个灯不断交替重复？
function red() {
    console.log('red light');
}

function green() {
    console.log('green light');
}

function yellow() {
    console.log('yellow light');
}
function tick(timer, callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
            resolve();
        }, timer);
    });
}
var promise = new Promise((resolve, reject) => {
	resolve() 
});
function loop() {
    promise.then(() => {
        return tick(10000, green);
    }).then(() => {
        return tick(3000, yellow);
    }).then(() => {
        return tick(5000, red);
    }).then(() => {
        loop();
    });
}
loop();
