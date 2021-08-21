function findSecret(code) {
  let splitCode = code.split('');

  return splitCode.filter((s) => s === s.toLowerCase()).join('');
}

console.log(findSecret('AsDfGhJkL'));
