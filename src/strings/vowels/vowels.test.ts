import { getCountOfVowels as getCountOfVowelsWithRegex} from './getCountWithRegex';
import { getCountOfVowels } from './getCountWithoutRegex';


describe('getCountOfVowels', () => {
  it('should return count 0 when string = "bcdfghjkl"', () => {
    expect(getCountOfVowelsWithRegex('bcdfghjkl')).toEqual(0);
    expect(getCountOfVowels('bcdfghjkl')).toEqual(0);
  });

  it('should return count 2 when string="apple"', () => {
    expect(getCountOfVowelsWithRegex('apple')).toEqual(2);
    expect(getCountOfVowels('apple')).toEqual(2);
  })
});
