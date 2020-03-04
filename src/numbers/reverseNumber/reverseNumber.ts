import { reverseString } from '../../strings/reverseString/reverseString';
/**
 * Given a number, reverse the number and return the value
 * @param value 
 * @returns {number}
 */
export function reverseNumber(value:number):number{
  const reverse = reverseString(value.toString());
  return parseInt(reverse,10) * Math.sign(value);
}
