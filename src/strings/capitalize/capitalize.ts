/**
 * Given a string, it should capitalize the first letter of each word and 
 * return a new string
 * @param str 
 * @returns { string }
 */
export function capitalize(str:string):string{
  let arr = [];
  arr.push(str[0].toUpperCase());
  for(let i=1;i<str.length;i++){
    if(str[i-1] === ' '){
      arr.push(str[i].toUpperCase());
    }else{
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

export function capitalizeWithSlice(str:string):string{
  let words = str.split(' ');
  return words.map(word => word[0].toUpperCase()+word.slice(1)).join(' ');
}
