function divisibleBy(n) {
    function check(x) {
        return x === n;
    }
    return check;
}
const isDivisibleByFive = divisibleBy(5);
console.log(isDivisibleByFive(4))
console.log(isDivisibleByFive(5))
