// check so nguyen duong
function checkNumber(n) {
  if (n > 0) {
  }
}

// check so nguyen duong chan
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}
// check so nguyen duong chan lon hon 10
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

// check so nguyen duong chan chia het cho 5 lon hon 10
function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n > 10 && n % 5 === 0) {
  }
}

// check so nguyen duong chan hoac so nguyen am le
function checkNumber5(n) {
  const isEventPositive = n > 0 && n % 2 === 0;
  const isOldNegative = n < 0 && n % 2 !== 0;

  return isEventPositive || isOldNegative;
}
