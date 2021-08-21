function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return;

  switch (mark) {
    case 0:
    case 1:
    case 2:
    case 3:
      return 'Bad';

    case 4:
    case 5:
    case 6:
      return 'Not Good';

    case 7:
    case 8:
      return 'Good';

    case 9:
    case 10:
      return 'Excellence';

    default:
      return 'Invalid mark';
  }
}
console.log(classifyStudent());
