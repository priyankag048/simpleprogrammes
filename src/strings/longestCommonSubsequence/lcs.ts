export function lcs(stringA:string, stringB: string, m: number, n:number): number{
  if(m === 0 || n === 0) {
    return 0;
  } else if(stringA[m-1] === stringB[n-1]) {
    return 1 + lcs(stringA,stringB, m-1, n-1);
  } else {
    return max(lcs(stringA,stringB, m, n-1), lcs(stringA, stringB, m-1,n));
  }
}

function max(a, b){
  return a > b ? a : b;
}


