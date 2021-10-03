function throttle(callback, wait) {
    let isThrottling = false;

    return function () {
        if (isThrottling) return

        isThrottling = true;
        setTimeout(() => {
            callback();
            isThrottling = false;
        }, wait)
    }

}
function log() {
    console.log('hello world');
}
const throttleLog = throttle(log, 500);
throttleLog();
throttleLog();
throttleLog();
throttleLog();
throttleLog();