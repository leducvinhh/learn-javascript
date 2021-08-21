// Viết hàm kiểm tra số chẵn lẻ

function isEven(n) {
  return n % 2 === 0;
}

function isOld(n) {
  return n % 2 !== 0;
}

// Kiểm tra số chia hết cho 5 hay không
function checkNumber2(n) {
  return n % 5 === 0;
}

// Kiểm tra số chính phương
function checkNumber3(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);

  return sqrtNInt ** 2 === n;
}

function checkNumber4(n) {
  if (n <= 0) return false;

  return Number.isInteger(Math.sqrt(n));
}
