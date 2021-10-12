//default values
function sum(a = 10, b = 20) {
    console.log(a + b);
}

//arguments
const numberList = [1, 2, 3, 4, 5, 6, 7, 8]
function arguments() {
   return [...arguments].reduce((acc, curr) => acc + curr)
}
console.log(arguments(1));
console.log(arguments(1,2));
console.log(arguments(...numberList));

//higher order function
function sum(x) {
    return function(y) {
        console.log(x + y);
    }
}
sum(10)(20)