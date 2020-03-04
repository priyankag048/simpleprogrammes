/** Given a string, return the number of vowels used in the string
 * @param str 
 * @returns { number } count of vowels used in a string
 */
export function getCountOfVowels(str:string): number{
  const pattern:RegExp = /[aeiou]/gi;
  const matched = str.toLowerCase().match(pattern);
  return matched === null ? 0 : matched.length;
}

