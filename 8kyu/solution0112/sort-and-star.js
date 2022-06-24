//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
    let sortedArray = s.sort();
    let starValue = '';
    
    for (let i = 0; i < sortedArray[0].length; i++){
      starValue += sortedArray[0][i];
      if (i < sortedArray[0].length -1) {
        starValue += '***'; 
      }
    }
    
    return starValue;
  }