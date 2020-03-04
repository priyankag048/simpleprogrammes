import { removeDuplicateCharacters } from "./removeDuplicateCharacters";

describe('Remove duplicate characters from string', () => {
  it('should return animl when string="animal"', () => {
    expect(removeDuplicateCharacters("animal")).toEqual("animl");
  });
  it('should return cat when string="cat"', () => {
    expect(removeDuplicateCharacters("animal")).toEqual("animl");
  });
  it('should return letter when string="letr"', () => {
    expect(removeDuplicateCharacters("letter")).toEqual("letr");
  });
})
