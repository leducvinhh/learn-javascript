// Viết hàm trả về số tiền vé phải trả
export function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age >= 70) return 0;
  if (age <= 12) return 20000;

  return 50000;
}

// Viết hàm nói xin chào bằng nhiều thứ tiếng
export function sayHello(languageCode) {
  const languageMap = {
    en: 'Hello',
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nin hao',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };

  return languageMap[languageCode] || 'Hello';
}
