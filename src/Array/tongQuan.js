const numberList = [1, 3, 5, 7, 9];
const numberList2 = [2, 4, 6, 8, 10];

function checkArr(arr, callback) {
  if (arr.length === 0) return;

  let check;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      check = true;
    } else {
      check = false;
      break;
    }
  }

  return check;
}

function isEvenNumber(number) {
  if (number % 2 !== 0) return false;

  return true;
}
function isOddNumber(number) {
  if (number % 2 === 0) return false;

  return true;
}
console.log(checkArr(numberList, isEvenNumber));
console.log(checkArr(numberList2, isEvenNumber));
console.log(checkArr(numberList, isOddNumber));
console.log(checkArr(numberList2, isOddNumber));
