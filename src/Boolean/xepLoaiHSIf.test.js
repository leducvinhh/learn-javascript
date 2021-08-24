import { classifyStudentV1, classifyStudentV2, classifyStudentV3 } from './xepLoaiHSIf..else';

describe('classifyStudentV1', () => {
  // < 0
  test('should return Invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudentV1(-1);
    expect(value).toBe('Invalid mark!');
  });
  //  > 10
  test('should return Invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudentV1(11);
    expect(value).toBe('Invalid mark!');
  });
  // 9 - 10
  test('should return Excellence when n > 8', () => {
    expect(classifyStudentV1(10)).toBe('Excellence');

    expect(classifyStudentV1(9)).toBe('Excellence');
  });

  // 7 - 8
  test('should return Good when n in [7 - 8]', () => {
    expect(classifyStudentV1(8)).toBe('Good');

    expect(classifyStudentV1(7)).toBe('Good');
  });

  // 4 - 5 - 6
  test('should return Not Good when n in [4 - 6]', () => {
    [4, 5, 6].forEach((m) => {
      expect(classifyStudentV1(m)).toBe('Not Good');
    });
  });

  // 3 - 2- 1 - 0
  test('should return Bad when n in [0-3]', () => {
    [0, 1, 2, 3].forEach((m) => {
      expect(classifyStudentV1(m)).toBe('Bad');
    });
  });
});
describe('classifyStudentV2', () => {
  // < 0
  test('should return Invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudentV2(-1);
    expect(value).toBe('Invalid mark!');
  });
  //  > 10
  test('should return Invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudentV2(11);
    expect(value).toBe('Invalid mark!');
  });
  // 9 - 10
  test('should return Excellence when n > 8', () => {
    expect(classifyStudentV2(10)).toBe('Excellence');

    expect(classifyStudentV2(9)).toBe('Excellence');
  });

  // 7 - 8
  test('should return Good when n in [7 - 8]', () => {
    expect(classifyStudentV2(8)).toBe('Good');

    expect(classifyStudentV2(7)).toBe('Good');
  });

  // 4 - 5 - 6
  test('should return Not Good when n in [4 - 6]', () => {
    [4, 5, 6].forEach((m) => {
      expect(classifyStudentV2(m)).toBe('Not Good');
    });
  });

  // 3 - 2- 1 - 0
  test('should return Bad when n in [0-3]', () => {
    [0, 1, 2, 3].forEach((m) => {
      expect(classifyStudentV2(m)).toBe('Bad');
    });
  });
});
describe('classifyStudentV3', () => {
  // < 0
  test('should return Invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudentV3(-1);
    expect(value).toBe('Invalid mark!');
  });
  //  > 10
  test('should return Invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudentV3(11);
    expect(value).toBe('Invalid mark!');
  });
  // 9 - 10
  test('should return Excellence when n > 8', () => {
    expect(classifyStudentV3(10)).toBe('Excellence');

    expect(classifyStudentV3(9)).toBe('Excellence');
  });

  // 7 - 8
  test('should return Good when n in [7 - 8]', () => {
    expect(classifyStudentV3(8)).toBe('Good');

    expect(classifyStudentV3(7)).toBe('Good');
  });

  // 4 - 5 - 6
  test('should return Not Good when n in [4 - 6]', () => {
    [4, 5, 6].forEach((m) => {
      expect(classifyStudentV3(m)).toBe('Not Good');
    });
  });

  // 3 - 2- 1 - 0
  test('should return Bad when n in [0-3]', () => {
    [0, 1, 2, 3].forEach((m) => {
      expect(classifyStudentV3(m)).toBe('Bad');
    });
  });
});
