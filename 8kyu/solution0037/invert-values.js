//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
    let convertedArray = [];
    
    for (i = 0; i < array.length; i++) {
      convertedArray[i] = array[i] * -1;
    }
    return convertedArray;
  }