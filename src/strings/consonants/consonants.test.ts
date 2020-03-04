import { getCountOfConsonants​​ } from './consonants';

describe('consonants', () => {
  it('should return 0 for aaeeii', () => {
    expect(getCountOfConsonants("aaeeii")).toEqual(0);
  });

  it('should return 4 for vehicle', () => {
    expect(getCountOfConsonants("vehicle")).toEqual(4);
  });

  it('should return the 3 for fly', () => {
    expect(getCountOfConsonants("fly")).toEqual(3);
  })
})
