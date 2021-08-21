'use strict';
// Kiểm tra điểm xếp loại học sinh

//V1
function classifyStudent1(mark) {
  if (mark < 0 || mark > 10) return;

  let result;

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';

  return result;
}

//V2
function classifyStudent2(mark) {
  if (mark < 0 || mark > 10) return;

  let result = 'Bad';

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';

  return result;
}

//V3
function classifyStudent3(mark) {
  if (mark < 0 || mark > 10) return;

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
