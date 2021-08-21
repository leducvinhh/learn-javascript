function handleStr(str, maxLength) {
  if (str.length === 0) return '';
  if (str.length <= maxLength) return str;

  const string = str.slice(0, maxLength);

  return `${string}\u2026`;
}
console.log(handleStr('Lê Đức Vinh', 4));
