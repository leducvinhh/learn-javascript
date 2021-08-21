function handleStr1(str) {
  if (str.length === 0) return '';

  return str.replaceAll(' ', '-').toLowerCase();
}

function handleStr2(str) {
  if (str.length === 0) return '';

  return str.split(' ').join('-').toLowerCase();
}
console.log(handleStr2('Lê Đức Vinh'));
