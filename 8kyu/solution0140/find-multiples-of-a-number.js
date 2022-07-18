//https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
    let result = [];
    
    for (let i = 1; i <= Math.floor(limit / integer); i++) {
      result.push(integer * i);
    }
    
    return result;
  }
  