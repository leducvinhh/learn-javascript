const wordList = ['one', 'two', 'three', 'four', 'five', 'six'];

function findWordMaxLengthV1(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let maxLength = wordList[0];

  for (let i = 1; i < wordList.length; i++) {
    if (wordList[i].length > maxLength.length) maxLength = wordList[i];
  }

  return maxLength;
}
console.log(findWordMaxLengthV1(wordList));

// forEach
function findWordMaxLengthV2(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let maxLength = wordList[0];

  wordList.forEach((x) => (x.length > maxLength.length ? (maxLength = x) : maxLength));

  return maxLength;
}
console.log(findWordMaxLengthV2(wordList));

// reduce
function findWordMaxLengthV3(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((acc, curr) => (acc.length < curr.length ? curr : acc));
}
console.log(findWordMaxLengthV3(wordList));
