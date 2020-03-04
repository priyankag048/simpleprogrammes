/**
 * Given a string, return the number of duplicate characters with count
 * @param str 
 * @returns {object} duplicate characters | null
 */
export function duplicateCharacters(str:string): {[key: string]: string} | null{
  const charMap = {};
  let duplicates = {};
  for(let char of str){
   if(!charMap.hasOwnProperty(char)){
     charMap[char] = 0;
   }
   charMap[char]++;
  }
  for(let char in charMap){
    if(charMap[char] > 1){
      duplicates[char] = charMap[char] -1
    }
  }
  return Object.keys(duplicates).length > 0 ? duplicates : null ;
}
