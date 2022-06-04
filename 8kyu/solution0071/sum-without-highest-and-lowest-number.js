//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  
    if (array === null || array === undefined || array.length < 3) {
      return 0;
    } else {
      const lowest = Math.min(...array);
      const highest = Math.max(...array);
      let sum = array.reduce((prev, curr) => prev + curr);
  
      return sum - lowest - highest;
    }
  }