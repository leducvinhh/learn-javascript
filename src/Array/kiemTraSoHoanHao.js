function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;

  const ucln = n / 2;
  let sum = 0;
  for (let i = 1; i <= ucln; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
console.log(isPerfectNumber());
