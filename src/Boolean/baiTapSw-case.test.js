import { getErrorMessage1, getErrorMessage2 } from './baiTapSw-case';

describe('getErrorMessage1()', () => {
  test('should return Something went wrong when input not match', () => {
    expect(getErrorMessage1('E07')).toBe('Something went wrong');
  });
  test('should return Invalid username or password when input = E01', () => {
    expect(getErrorMessage1('E01')).toBe('Invalid username or password');
  });
  test('should return Too many attempts when input = E02', () => {
    expect(getErrorMessage1('E02')).toBe('Too many attempts');
  });
  test('should return Missing data when input = E03', () => {
    expect(getErrorMessage1('E03')).toBe('Missing data');
  });

});

describe('getErrorMessage2()', () => {
  test('should return Something went wrong when input not match', () => {
    expect(getErrorMessage2('E07')).toBe('Something went wrong');
  });
  test('should return Invalid username or password when input = E01', () => {
    expect(getErrorMessage2('E01')).toBe('Invalid username or password');
  });
  test('should return Too many attempts when input = E02', () => {
    expect(getErrorMessage2('E02')).toBe('Too many attempts');
  });
  test('should return Missing data when input = E03', () => {
    expect(getErrorMessage2('E03')).toBe('Missing data');
  });

});
