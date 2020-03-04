/**
 * Given two strings, return true if both are anagrams of each other, 
 * else return false
 * @param stringA 
 * @param stringB 
 * @returns {boolean} true | false
 */
export function anagrams(stringA:string, stringB: string):boolean {
  if(stringA.length !== stringB.length) {
    return false;
  }
  return sortString(stringA) === sortString(stringB);
}

function sortString(str: string):string{
  return str.replace(/[\W]*/g, '').split('').sort().join('')
}
