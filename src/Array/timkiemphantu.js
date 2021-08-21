const myArray = [
  {
    id: 1,
    name: 'empty1',
  },
  {
    id: 2,
    name: 'empty2',
  },
  {
    id: 3,
    name: 'empty3',
  },
];

let checkE = myArray.find((x) => x.id === 3);
let checkI = myArray.findIndex((x) => x.id === 3);
console.log(checkE);
console.log(checkI);

// Xây dựng hàm find

function find(array, callback) {
  if (!Array.isArray(array)) return undefined;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return array[i];
  }

  return undefined;
}

console.log(find([3, 5, 8], (x) => x > 5 && x % 4 === 0));
