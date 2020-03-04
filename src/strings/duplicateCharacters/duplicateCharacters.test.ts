import { duplicateCharacters } from './duplicateCharacters';

describe('duplicate characters', () => {
  it('should return repeated characters and count', () => {
    const expected = { a: 1 };
    expect(duplicateCharacters("animal")).toEqual(expected);
  });

  it('should return null if there is no repeated character', () => {
    expect(duplicateCharacters("cat")).toEqual(null);
  });
});
