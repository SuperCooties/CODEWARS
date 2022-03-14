//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    const arr1Sum = arr1.reduce((prev, curr) => prev + curr);
    const arr2Sum = arr2.reduce((prev, curr) => prev + curr);
    
    return arr1Sum + arr2Sum; 
  }