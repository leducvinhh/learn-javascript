const input = [3, 2, 1, 5, 2, 6, 3, 6, 9, 10, 11, 12, 13];

function filter(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== 'function') return undefined;

  let output = [];

  for (let i in arr) {
    let value = arr[i];
    if (callback(value, i)) output.push(value);
  }

  return output;
}

console.log(filter(input, (e, i) => e > 6));
console.log(filter(input, (e, i) => e % 2 === 0 && i % 2 !== 0));


