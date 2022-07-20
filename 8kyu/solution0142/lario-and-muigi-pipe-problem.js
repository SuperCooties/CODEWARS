//https://www.codewars.com/kata/56b29582461215098d00000f

function pipeFix(numbers){
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    let result = [];
    
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    
    return result;
  }
  
  