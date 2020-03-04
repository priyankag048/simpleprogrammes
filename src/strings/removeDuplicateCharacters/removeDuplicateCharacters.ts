/**
 * Given a string, remove all duplicate characters and return a new string
 * @param str 
 * @returns {string}
 */
export function removeDuplicateCharacters(str:string):string{
  let stringWithoutDuplicates = [];
  const charMap = {};
  for(let char of str){
    if(!charMap.hasOwnProperty(char)){
      charMap[char] = 0;
    }
    charMap[char]++;
  }

  for(let key in charMap){
    stringWithoutDuplicates.push(key);
  }
  return stringWithoutDuplicates.join('');
}
