import { palindrome } from "./palindrome";

describe('palindrome', () => {
  it('should return true for madam', () => {
    expect(palindrome("madam")).toBeTruthy();
  });

  it('should return false for animal', () => {
    expect(palindrome("animal")).toBeFalsy();
  });
});
