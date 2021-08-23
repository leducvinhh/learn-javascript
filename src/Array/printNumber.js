function printNumbers() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

printNumbers();

function printEvenNumbers() {
  let i = 1;
  while (i <= 10) {
    if (i % 2 === 0) console.log(i);
    i++;
  }
}

printEvenNumbers();
//v2
function printEvenNumbers() {
  let i = 2;
  while (i <= 10) {
    console.log(i);
    i += 2;
  }
}

printEvenNumbers();


function printEvenNumbersN(n) {
  let i = 2;
  while (i <= n) {
    console.log(i);
    i+= 2;
  }
}

printEvenNumbersN(21);