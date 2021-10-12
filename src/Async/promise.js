const b = new Promise((resolve, reject) =>{
    resolve('BBB')
});

const promiseA = Promise.resolve('AAA');
const promiseB = Promise.resolve(b);

Promise.all([promiseA, promiseB])
.then(([resultA, resultB]) => {
    console.log(resultA, resultB);
})

Promise.resolve(5)
.then(a => a * 2)
.then(a => Promise.resolve(a * 2))
.then(a => a + 10)
.then(a => console.log(a))