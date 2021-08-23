function transformNumbersV1(numberList) {
  const newArray = [...numberList];
  if (!Array.isArray(numberList)) return [];
  if (numberList.length <= 1) return newArray;

  let newNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      newNumberList.push(numberList[1]);
    } else if (i < numberList.length - 1) {
      newNumberList.push(numberList[i - 1] + numberList[i + 1]);
    } else {
      newNumberList.push(numberList[numberList.length - 2]);
    }
  }

  return newNumberList;
}
console.log(transformNumbersV1([]));

function transformNumbersV2(numberList) {
  const newArray = numberList;
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length <= 1) return newArray;

  let newNumberList = [];

  numberList.forEach((x, i) => {
    if (i === 0) {
      newNumberList.push(numberList[1]);
    } else if (i < numberList.length - 1) {
      newNumberList.push(numberList[i - 1] + numberList[i + 1]);
    } else {
      newNumberList.push(numberList[numberList.length - 2]);
    }
  });

  return newNumberList;
}
console.log(transformNumbersV2([2, 4, 6, 8]));

function transformNumbersV3(numberList) {
  const newArray = numberList;
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length <= 1) return newArray;

  return numberList.map((x, i) => {
    if (i === 0) {
      return numberList[1];
    } else if (i < numberList.length - 1) {
      return numberList[i - 1] + numberList[i + 1];
    } else {
      return numberList[numberList.length - 2];
    }
  });
}
console.log(transformNumbersV3([2, 4, 6, 8]));
