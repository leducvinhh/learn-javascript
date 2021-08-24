import {getTicketPrice, sayHello} from './BaitapSS5';

describe('getTicketPrice()', () => {
  test('should return -1 when age <= 0', () => {
    expect(getTicketPrice(0)).toBe(-1);
  });

  test('should return -1 when age > 125 ', () => {
    expect(getTicketPrice(126)).toBe(-1);
  });

  [1,2,3,4,5].forEach(x => {
    test('should return 0 when 0 < age <= 6', () => {
    expect(getTicketPrice(x)).toBe(0);
    });
  })

  test('should when return 0 when age >= 70 ', () => {
    expect(getTicketPrice(70)).toBe(0);
  });

  [6,7,8,9,10,11,12].forEach(x => {
    test('should when return 20000 when age <= 12  ', () => {
      expect(getTicketPrice(x)).toBe(20000);
    });
  })

  test('should return 50000 when age > 12', () => {
    expect(getTicketPrice(13)).toBe(50000);
  });
});

describe('sayHello(languageCode)', () => {
  test('should return Hello when languageCode === en', () => {
    expect(sayHello("en")).toBe('Hello');
  });
  test('should return Xin chào when languageCode === vi', () => {
    expect(sayHello("vi")).toBe('Xin chào');
  });
  test('should return Bonjour when languageCode === fr', () => {
    expect(sayHello("fr")).toBe('Bonjour');
  });
  test('should return Nin hao when languageCode === cn', () => {
    expect(sayHello("cn")).toBe('Nin hao');
  });
  test('should return Konnichiwa when languageCode === ja', () => {
    expect(sayHello("ja")).toBe('Konnichiwa');
  });
  test('should return Anyoung haseyo when languageCode === ko', () => {
    expect(sayHello("ko")).toBe('Anyoung haseyo');
  });

  test('should return hello when languageCode === string', () => {
    expect(sayHello('ada')).toBe('Hello');
  });
});