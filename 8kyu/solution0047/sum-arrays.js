//https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Sum Numbers
function sum (numbers) {
    "use strict";
  let sum = 0;  
  if (numbers.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    
};