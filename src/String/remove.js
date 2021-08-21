function removeVowel(str) {
  if (str.length === 0) return '';

  let newstr = str;

  newstr = newstr.replace('u', '');
  newstr = newstr.replace('e', '');
  newstr = newstr.replace('o', '');
  newstr = newstr.replace('a', '');
  newstr = newstr.replace('i', '');

  return newstr.trim();
}
console.log(removeVowel('uekhongoai'));
