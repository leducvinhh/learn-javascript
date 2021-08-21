const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// xây dựng function every
function every(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return false;
  }

  return true;
}
console.log(every(myArray));

// xây dựng function some
function some(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return true;
  }

  return false;
}
console.log(some(myArray));

// xây dựng function indexOf
function indexOf(arr, search) {
  if (!Array.isArray(arr)) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) return i;
  }

  return -1;
}
console.log(indexOf(myArray, 1));
console.log(indexOf(myArray, 10));

// xây dựng function lastIndexOf
function lastIndexOf(arr, search) {
  if (!Array.isArray(arr)) return -1;
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) index = i;
  }

  return index;
}
console.log(lastIndexOf([1, 2, 3, 1], 1));

// xây dựng function includes
function includes(arr, search) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) return true;
  }

  return false;
}
console.log(includes([1, 2, 3], 4));

