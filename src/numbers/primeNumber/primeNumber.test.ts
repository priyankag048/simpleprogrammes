import { primeNumber } from './primeNumber';

describe('Check if a number is prime', () => {
  it('should return true if a given number is prime', () => {
    expect(primeNumber(13)).toBeTruthy();
  });

  it('should return true if a given number is prime', () => {
    expect(primeNumber(181)).toBeTruthy();
  });

  it('should false if a given number is not prime', () => {
    expect(primeNumber(30)).toBeFalsy();
  });
});
