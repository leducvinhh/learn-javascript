function getDivisorListV1(n) {
  if (n < 1 || n > 1000) return null;
  let newArray = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) newArray.push(i);
  }

  return newArray;
}

console.log(getDivisorListV1(10));

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return null;

  const range = Array.from({ length: (n - 1) / 1 + 1 }, (_, i) => 1 + i * 1);

  return range.filter((x) => n % x === 0);
}
console.log(getDivisorListV2(10));

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  if (n < 1 || n > 1000) return null;

  const range = Array.from({ length: (n - 1) / 1 + 1 }, (_, i) => 1 + i * 1);
  

  let newArray = [];

  range.filter((x) => (n % x === 0 ? newArray.push(x) : newArray));

  return newArray.sort((a, b) => a - b);
}
console.log(getDivisorListV3(10));