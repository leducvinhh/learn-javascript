function createIterator(n) {
    let i = 0;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {
                        value: [i, i * 2],
                        done: i >= n,
                    }
                    i += 5;
                    return result;
                }
            }
        }
    }
}
const iterator = createIterator(50);
for (let [number, numberX2] of iterator) {
    console.log(number, numberX2);
}