/**
 * Given a string, return the number of consonants used in the string 
 * @param str 
 * @returns {number} count
 */
export function getCountOfConsonants​​(str:string):number{
  const vowelPattern = /[aeiou]/gi;
  const matchedVowel = str.toLowerCase().match(vowelPattern);
  return matchedVowel === null ? str.length : str.length - matchedVowel.length;
}
