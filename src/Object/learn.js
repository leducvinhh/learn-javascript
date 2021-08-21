const obj = {
  name: 'Vinh',
  age: 24,
};
// console.log(obj['name']);

const students = {
  id: 1,
  name: 'Lê Đức Vinh',
  isHero: true,
};
students.name = 'Vinh';
students.mark = 10;
students['age'] = 25;

delete students['name'];
console.log(Object.keys(students));
