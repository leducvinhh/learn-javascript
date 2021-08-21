function randomNumber(n) {
  if (n <= 0) return -1;

  return Math.round(Math.random() * n);
}

randomNumber(10); 
