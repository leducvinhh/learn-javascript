'use strict';
// Kiểm tra điểm xếp loại học sinh

//V1
export function classifyStudentV1(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  let result;

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';

  return result;
}

//V2
export function classifyStudentV2(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  let result = 'Bad';

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';

  return result;
}

//V3
export function classifyStudentV3(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
