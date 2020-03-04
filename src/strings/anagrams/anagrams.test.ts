import { anagrams } from './anagrams';

describe('anagrams', () => {
  it('should return false when two strings consist different characters', () => {
    expect(anagrams("one", "two")).toBeFalsy();
  });

  it('should return false if two strings are of different length', ()=> {
    expect(anagrams("animal", "milan")).toBeFalsy();
  });

  it('should return true if two strings contain the same characters', () => {
    expect(anagrams("cat", "act")).toBeTruthy();
  });

});
