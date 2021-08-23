function createArrayInRangeV1(a, b) {
  if (a < -100 || a > 100 || b < -100 || b > 100 || a > b) return undefined;

  let newArray = [];
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }

  return newArray;
}

function createArrayInRangeV1(a, b) {
  if (a < -100 || a > 100 || b < -100 || b > 100 || a > b) return undefined;

  const range = Array.from({ length: (b - a) / 1 + 1 }, (_, i) => a + i * 1);

  return range;
}

console.log(createArrayInRangeV1(1, 10));
