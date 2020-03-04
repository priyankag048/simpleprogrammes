/**
 * Given a value, return true if the number is a perfect square, 
 * else return false
 * @param value 
 * @returns {boolean} true | false
 */
export function perfectSquare(value:number):boolean{
  let count = 0;
  for(let i = 1; i<value; i+=2){
    count+=i;
    if(value === count){
      return true;
    }
  }
  return false;
}
