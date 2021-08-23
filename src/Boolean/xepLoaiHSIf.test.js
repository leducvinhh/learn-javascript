import { classifyStudentV3 } from './xepLoaiHSIf..else';

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
  // 0-3
  test('should return Invalid mark! when pass invalid n = 0', () => {
    const value = classifyStudentV3(0);
    expect(value).toBe('Bad');
  });
  test('should return Invalid mark! when pass invalid n = 1', () => {
    const value = classifyStudentV3(1);
    expect(value).toBe('Bad');
  });
  test('should return Invalid mark! when pass invalid n = 2', () => {
    const value = classifyStudentV3(2);
    expect(value).toBe('Bad');
  });
  test('should return Invalid mark! when pass invalid n = 3', () => {
    const value = classifyStudentV3(3);
    expect(value).toBe('Bad');
  });
  test('should return Invalid mark! when pass invalid n = 4', () => {
    const value = classifyStudentV3(4);
    expect(value).toBe('Not Good');
  });
  test('should return Invalid mark! when pass invalid n = 5', () => {
    const value = classifyStudentV3(5);
    expect(value).toBe('Not Good');
  });
  test('should return Invalid mark! when pass invalid n = 6', () => {
    const value = classifyStudentV3(6);
    expect(value).toBe('Not Good');
  });
  test('should return Invalid mark! when pass invalid n = 7', () => {
    const value = classifyStudentV3(7);
    expect(value).toBe('Good');
  });
  test('should return Invalid mark! when pass invalid n = 8', () => {
    const value = classifyStudentV3(8);
    expect(value).toBe('Good');
  });
  test('should return Invalid mark! when pass invalid n = 9', () => {
    const value = classifyStudentV3(9);
    expect(value).toBe('Excellence');
  });
  test('should return Invalid mark! when pass invalid n = 10', () => {
    const value = classifyStudentV3(10);
    expect(value).toBe('Excellence');
  });
});
