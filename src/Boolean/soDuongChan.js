// Viết hàm kiểm tra số nguyên dương chẵn

//V1
function isPositiveEventNumber1(n) {
  let isValid; // Kỹ thuật đặt cờ hiệu

  if (n % 2 == 0 && n > 2) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

//V2
function isPositiveEventNumber2(n) {
  let isValid = false; //Kỹ thuật đặt cờ hiệu

  if (n % 2 == 0 && n > 2) {
    isValid = true;
  }

  return isValid;
}

//V3
function isPositiveEventNumber3(n) {
  if (n % 2 == 0 && n > 2) {
    return true;
  }

  return false;
}

//V4
function isPositiveEventNumber4(n) {
  return n % 2 == 0 && n > 2;
}
