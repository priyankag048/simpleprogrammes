/**
 * Given a number, if the number is prime and return true, else return false
 * @param value 
 * @returns {boolean} true | false
 */
export function primeNumber(value:number):boolean{
  for(let i=2; i<value-1; i++){
    if(value%i === 0){
      return false;
    }
  }
  return true;
}
