// random 1 số trong khoảng a -> b;

function randomNumber(a, b) {
  if (b <= a) return -1;

  return Math.round(Math.random() * (b - a)) + a;
}

randomNumber(90, 110);
