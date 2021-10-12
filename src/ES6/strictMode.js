function getName(cb) {
    setTimeout(() => {
        cb('Vin')
    }, 1000)
}
getName(logName)
function logName(name) {
    console.log(name);
}