const numberList = [1, 2, 3, 4];
const newNumberList = numberList.map((x) => x * 2);
console.log(newNumberList);

const wordList = ['Lê', 'Đức', 'Vinh'];
const transformWord = wordList.map((x) => x.length);
const newWordList = wordList.map((x) => `${x} -`);
console.log(transformWord);
console.log(newWordList);

// xây dựng function map
const numberList = [1, 2, 3, 4];
function map(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== 'function') return undefined;

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    result.push(callback(element, i));
  }

  return result;
}

function callback(e, i) {
  if (i % 2 === 0) return e + 1;
  return e * 2;
}

console.log(map(numberList, callback));
console.log(map(numberList, (e, i) => (i % 2 === 0 ? e + 1 : e * 2)));
