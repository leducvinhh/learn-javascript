function cloneObject(obj) {
  const newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
}
console.log(cloneObject({ id: 1, name: 'vinh' }));
