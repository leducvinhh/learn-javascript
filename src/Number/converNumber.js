console.log(1e-4); //0,0004;
console.log(1e6); //1000000;

console.log(Number('123')); //123
console.log(Number.parseInt('1.5')); //1
console.log(Number.parseFloat('1.5')); //1.5

console.log(Number('123.5a')); //NaN
console.log(Number.parseInt('123.5a')); //123
console.log(Number.parseFloat('123.5a')); //123.5

console.log(Number(null)); //1
console.log(Number(undefined)); //NaN

console.log(Number(true)); //1
console.log(Number(false)); //0

let n =123.525
console.log(n.toString());