import { reverseWord } from "./reverseWord";

describe('reverse word', () => {
  it('should return "olleh dlrow" for "hello world"', () => {
    expect(reverseWord("hello world")).toEqual("olleh dlrow");
  });
});
