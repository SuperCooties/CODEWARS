//https://www.codewars.com/kata/59811fd8a070625d4c000013

function integrate(coefficient, exponent) {
    //add 1 to exponent
    let newExp = exponent + 1;
    
    //divide coefficient by new number
    let newCoeff = coefficient / newExp;
    
    //create stringified answer
    let integral = `${newCoeff}x^${newExp}`;
    
    return integral;  
  }