// Tính diện tích hình chữ nhật

function calcAreaOfRectangle(x, y) {
  if (x <= 0 || y <= 0) return -1;

  return x * y;
}

//Tính chu vi hình chữ nhật
function calcPerimeterOfRectangle(x, y) {
  if (x <= 0 || y <= 0) return -1;

  return (x + y) * 2;
}

//Tính diện tích hình tròn
function calcPerimeterOfRectangle(r) {
  if (r <= 0) return -1;

  return (Math.PI * r ** 2).toFixed(2);
}
