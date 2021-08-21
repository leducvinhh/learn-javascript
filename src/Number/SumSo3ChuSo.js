// Tính tổng 1 số có 3 chữ số
function sum(n) {
  if (n < 100 || n >= 1000) return -1;

  const ones = Math.trunc(n % 10);
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  return hundreds + tens + ones;
}

console.log(sum(999))
