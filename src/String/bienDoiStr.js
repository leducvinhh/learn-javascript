function capitalize(str) {
  if (str.length <= 0) return;

  const upper = str[0].toUpperCase();
  const lower = str.slice(1).toLowerCase();

  return `${upper}${lower}`;
}

console.log(capitalize('Lê Đức Vinh'));
