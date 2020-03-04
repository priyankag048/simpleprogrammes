import { perfectSquare } from './perfectSquare';

describe('Check if a number is a perfect square', () => {
  it('should return true if a given number is perfect square', () => {
    expect(perfectSquare(9)).toBeTruthy();
  });

  it('should return true if a given number is perfect square', () => {
    expect(perfectSquare(81)).toBeTruthy();
  });

  it('should false if a given number is not perfect square', () => {
    expect(perfectSquare(30)).toBeFalsy();
  });
});
