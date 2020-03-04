import { reverseString​​ } from './reverseString';

describe('reverseString', () => {
  it('should reverse string hello to olleh', () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  it("should reverse string animal to lamina", () => {
    expect(reverseString("animal")).toEqual("lamina");
  });
})
