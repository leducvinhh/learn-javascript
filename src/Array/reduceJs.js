const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberList.reduce((sum, e) => sum + e));

//Xây dựng function reduce
function reduce(arr, callback, initialValue) {
  if (!Array.isArray(arr) || typeof callback !== 'function') {
    throw new Error('Invalid parameters');
  }

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when array is empty ');
    } else {
      return initialValue;
    }
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i);
  }

  return accumulator;
}

function callback(acc, curr, ind) {
  acc.push(curr * 2);
  return acc;
}
console.log(
  reduce(
    numberList,
    (x, y) => {
      x.push(y * 3);
      return x;
    },
    []
  )
);
