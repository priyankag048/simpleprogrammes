/**
 * Given a string, return true if the string contains only digits, else
 * returns false
 * @param str 
 * @returns {boolean} true|false
 */
export function stringWithDigit(str:string):boolean{
  const pattern = /^[\d]*$/g;
  return pattern.test(str);
}
