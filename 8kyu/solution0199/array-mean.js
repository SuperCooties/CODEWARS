//https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
  
    const divisor = nums.length;
    
    let sum = nums.reduce((prev, curr) => prev + curr);
   
    return sum/divisor;
  }
  
  
  