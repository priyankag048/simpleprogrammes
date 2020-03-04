export function permute(str:string, start: number, end: number){
  if(start === end){
    console.log(str);
  }else{
    for(let i =start;i<=end;i++){
      str = swap(str, start, i);
      permute(str, start+1, end);
      str = swap(str, start, i);
    }
  }
}

function swap(str:string, start:number, end: number): string{
  const characters = str.split('');
  const temp = characters[start];
  characters[start] = characters[end];
  characters[end] = temp;
  return characters.join('');
}

