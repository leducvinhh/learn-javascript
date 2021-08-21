// Viết hàm tính số giây dựa vào số giờ cho trước
function calcSeconds(hours) {
  if (hours <= 0) return 0;

  const SECONDS_PER_HOUR = 3600;

  return hours * SECONDS_PER_HOUR;
}

// Tìm số lớn nhất từ 3 số cho trước
function checkMaxValue(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

//Tìm số chẵn lớn nhất từ 3 số cho trước
function checkMinValueEven1(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a > max && a % 2 === 0) max = a;
  if (b > max && b % 2 === 0) max = b;
  if (c > max && c % 2 === 0) max = c;

  return max;
}

function checkMinValueEven2(a, b, c) {
  let max = a;

  if (b > max && b % 2 === 0) max = b;
  if (c > max && c % 2 === 0) max = c;

  return max % 2 === 0 ? max : -1;
}
