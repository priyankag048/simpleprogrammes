/**
 * Given a string, return true if the string is palindrome, else return false
 * @param str 
 * @returns {boolean}
 */
export function palindrome​​(str:string):boolean{
  const strLen = str.length;
  for(let i=0, j=strLen-1; i<(strLen-1)/2; i++,j--){
    if(str[i] !== str[j]){
      return false;
    }
  }
  return true;
}
