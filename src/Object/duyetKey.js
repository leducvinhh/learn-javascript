const myObj = {
  id: 1,
  name: 'empty',
  age: 25,
  weight: 54,
  address: 'Thanh Hóa',
};

//v1
const keyList = Object.keys(myObj);
for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];

  console.log('key:', key);
  console.log('value:', myObj[key]);
}

//v2
Object.keys(myObj).forEach((key) => {
  console.log('key:', key);
  console.log('value:', myObj[key]);
});

//v3
for (let key in myObj) {
  console.log('key:', key);
  console.log('value:', myObj[key]);
}
