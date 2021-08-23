// for i
const numberList = [10, 2, 3, 4, 5, 6, 7, 8, 9];

function findMaxValueV1(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// forEach
const numberList = [10, 2, 3, 4, 5, 6, 7, 8, 9];

function findMaxValueV2(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  let max = arr[0];

  arr.forEach((x) => x > max ?? (max = x));

  return max;
}

console.log(findMaxValueV2(numberList));

//  reduce
const numberList = [10, 2, 3, 4, 5, 6, 7, 8, 9];

function findMaxValueV3(arr) {
  return arr.reduce((max, val) => (val > max ? val : max));
  return arr.reduce((max, val) => Math.max(max, val));
}
console.log(findMaxValueV3(numberList));
