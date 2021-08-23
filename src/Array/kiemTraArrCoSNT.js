function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  const sqrt = Math.trunc(Math.sqrt(n));

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function hasPrimeV1(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) return true;
  }

  return false;
}

//  forEach
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList)) return false;

  let result = false;
  numberList.forEach((x) => {
    if (isPrime(x)) result = true;
  });

  return result;
}

//  find
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList)) return false;

  let result = numberList.find((x) => isPrime(x));
  return result !== undefined ? true : false;
}

//  findIndex
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList)) return false;

  let result = numberList.findIndex((x) => isPrime(x));
  return result !== -1 ? true : false;
}

//  some
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList)) return false;

  return numberList.some((x) => isPrime(x));
}
console.log(hasPrimeV1([14, 4, 6, 8, 12]));
console.log(hasPrimeV2([14, 4, 6, 8, 12]));
console.log(hasPrimeV3([14, 4, 6, 8, 12]));
console.log(hasPrimeV4([14, 4, 6, 8, 12]));
console.log(hasPrimeV5([14, 4, 6, 8, 12]));
