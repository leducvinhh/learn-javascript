function getFullName(firstName, lastName) {
  if (firstName === undefined || firstName === '') return lastName;
  if (lastName === undefined || lastName === '') return firstName;

  let firstTrim = firstName.trim();
  let lastTrim = lastName.trim();

  let newFirstName = `${firstTrim[0].toUpperCase()}${firstTrim.slice(1).toLowerCase()}`;
  let newLastName = `${lastTrim[0].toUpperCase()}${lastTrim.slice(1).toLowerCase()}`;

  return `${newFirstName} ${newLastName.trim()}`;
}

console.log(getFullName(' vinh', 'Lê '));
