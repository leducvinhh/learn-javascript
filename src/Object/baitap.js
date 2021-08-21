function checkEmpty(obj) {
  return Object.keys(obj).length > 0;
}
console.log(checkEmpty({ id: 1 }));

function calcMax(obj) {
  let sumMark = 0;
  const length = Object.keys(obj).length;

  for (let key in obj) {
    sumMark += obj[key];
  }

  return (sumMark / length).toFixed(1);
}

console.log(calcMax({ math: 10, history: 8, english: 9 }));
