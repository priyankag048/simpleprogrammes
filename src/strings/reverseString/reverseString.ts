/**
 * Given a string, return a new string with reversed order os characters
 * @param str 
 * @returns { string } reversed string
 */
export function reverseString​​(str:string):string{
  const characters: string[] = str.split('');
  const strLen: number = str.length;
  for(let i=0, j =strLen-1; i<(strLen-1)/2; i++,j--){
    const temp: string = characters[i];
    characters[i] = characters[j];
    characters[j] = temp;
  }
  return characters.join('');
}
