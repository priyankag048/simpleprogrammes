/** Given a string, return the number of vowels used in the string
 * @param str 
 * @returns { number } count of vowels used in a string
 */

export function getCountOfVowels(str:string): number{
  const vowels:string[] = ['a', 'e', 'i', 'o', 'u'];
  let count:number = 0;
  for(let char of str){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}

