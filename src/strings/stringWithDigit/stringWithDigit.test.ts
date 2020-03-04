import { stringWithDigit } from './stringWithDigit';

describe('stringWithDigit', () => {
  it('should return false if string contains anything apart from digits', () => {
    expect(stringWithDigit("abcd")).toBeFalsy();
  });
  it('should return false if string contains characters and digits', () => {
    expect(stringWithDigit("abcd123")).toBeFalsy();
  });
  it('should return true if string contains only digits', () => {
    expect(stringWithDigit("1234")).toBeTruthy();
  });
});
