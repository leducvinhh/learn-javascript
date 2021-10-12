// Kỹ thuật debounce
function debounce(callback, wait) {
    let timeoutId
    return function () {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => { callback() }, wait)
    }
}
function log() {
    console.log('hello world')
}
const debounceLog = debounce(log, 500)
debounceLog()
debounceLog()
debounceLog()
debounceLog()
debounceLog()
debounceLog()

// Kỹ thuật throttle
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

// Sử dụng setTimeout với this

const obj = {
    name: 'Vin', 
    getName() {
        console.log(this.name);
    }
}
// cách 1: tạo wrapper function
setTimeout(() => {
    obj.getName();
})
// cách 2: bind() trực tiếp cho function chứa this
setTimeout(obj.getName.bind(obj));

const student = {
    name: 'Lê Đức Vinh', 

    getName () {
        console.log(this);
    }, 

    getNameNormal() {
        console.log('this normal', this);
        // function bình thường trong setTimeout sẽ được bind vào global obj
        setTimeout(function() {
            console.log('timeout fn', this);
        })
    },
    getNameArrow() {
        console.log('this normal', this);
        // arrow fn không có context nên nhận context của thằng bên ngoài
        setTimeout(() => {
            console.log('timeout fn', this);
        })
    }
}
student.getNameNormal();