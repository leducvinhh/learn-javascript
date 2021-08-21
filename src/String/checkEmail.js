function checkEmail1(email) {
  if (email.length === 0) return '';

  let check = email.includes('@gmail.com');

  return check;
}
function checkEmail2(email) {
  if (email.length === 0) return '';

  let check = email.lastIndexOf('@gmail.com');


  return check >= 0 ? true : null;
}
console.log(checkEmail2('ldvinh596'));
console.log(checkEmail2('ldvinh596@gmail'));
console.log(checkEmail2('ldvinh596@gmail.com'));
