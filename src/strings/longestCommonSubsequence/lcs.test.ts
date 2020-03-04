import { lcs } from './lcs';

describe('longest common subsequence', () => {
  it('should return 4', () => {
    expect(lcs("AGGTAB", "GXTXAYB",6, 7 )).toEqual(4);
  });
  it('should return 3', () => {
    expect(lcs("ABCDGH", "AEDFHR",6, 6 )).toEqual(3);
  });
});
