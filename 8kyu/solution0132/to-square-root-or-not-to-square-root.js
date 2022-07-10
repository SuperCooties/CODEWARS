//https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++){
      if (Number.isInteger(Math.sqrt(array[i]))){
        newArray.push(Math.sqrt(array[i]));
      } else {
        newArray.push(array[i] * array[i]);
      }
    }
    
    return newArray;  
  }