import { reverseNumber } from './reverseNumber';

describe('Reverse a number', () => {
  it('should return -15 if a given number is -51', () => {
    expect(reverseNumber(-51)).toEqual(-15);
  });

  it('should return 28 if a given number is 82', () => {
    expect(reverseNumber(82)).toEqual(28);
  });

  it('should return -145 if a given number is -541', () => {
    expect(reverseNumber(-541)).toEqual(-145);
  });
});
