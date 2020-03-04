import { reverseString } from '../reverseString/reverseString';
/**
 * Given a string, reverse each word of the string and return the new string
 * @param str 
 * @returns { string }
 */
export function reverseWord​​(str:string):string{
  const words = str.split(' ');
  return words.map( (word) => reverseString(word)).join(' ');
}
