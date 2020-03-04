import { capitalize, capitalizeWithSlice } from './capitalize';

describe('Capitalize first letter of each word in a string', () => {
  it('should return "Hello World" for "hello world', () => {
    expect(capitalize("hello world")).toEqual("Hello World");
    expect(capitalizeWithSlice("hello world")).toEqual("Hello World");
  });

  it('should return "The Quick Brown Fox Jumps Over The Lazy Dog" for "the quick brown fox jumps over the lazy dog" ', () => {
    expect(capitalize("the quick brown fox jumps over the lazy dog"))
      .toEqual("The Quick Brown Fox Jumps Over The Lazy Dog");
    expect(capitalizeWithSlice("the quick brown fox jumps over the lazy dog"))
    .toEqual("The Quick Brown Fox Jumps Over The Lazy Dog");
  });
});
