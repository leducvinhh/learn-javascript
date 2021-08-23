function isPerfectNumber(n) {
  const ucln = n / 2;
  let sum = 0;

  for (let i = 1; i <= ucln; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}
function isAllPerfectNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) return false;
  }

  return true;
}
console.log(isAllPerfectNumbersV1([1, 2, 3]));
console.log(isAllPerfectNumbersV1([6, 28]));

function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return false;

  let result = numberList.reduce((acc, curr) => {
    if (isPerfectNumber(curr)) return acc + 1;
  }, 0);

  return result === numberList.length;
}
console.log(isAllPerfectNumbersV2([1, 2, 3]));
console.log(isAllPerfectNumbersV2([6, 28]));

// every
function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return false;

  return numberList.every((x) => isPerfectNumber(x));
}
console.log(isAllPerfectNumbersV3([1, 2, 3]));
console.log(isAllPerfectNumbersV3([6, 28]));