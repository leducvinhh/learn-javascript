// Viết hàm nhận vào 1 mã lỗi và in ra lỗi tương ứng

function getErrorMessage1(errorCode) {
  switch (errorCode) {
    case 'E01':
      return 'Invalid username or password';
    case 'E02':
      return 'Too many attempts';
    case 'E03':
      return 'Missing data';
    default:
      return 'Something went wrong';
  }
}

function getErrorMessage2(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

  return errorMap[errorCode] || 'Something went wrong';
}

