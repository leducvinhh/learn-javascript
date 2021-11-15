const obj = {name: 'Vin', age: 25}
console.info('hello')
console.error('error')
console.warn('warning')
console.debug('bug')

// hiển thị 1 obj bên trong 1 chuỗi console
console.log('my obj: %o is loading', obj)

// tính toán thời gian thực hiện xong 1 hàm
console.time('loop')

for(let i = 0; i < 10000; i++) {
    if(i % 1000 === 0) console.timeLog('loop')
}

console.timeEnd('loop')