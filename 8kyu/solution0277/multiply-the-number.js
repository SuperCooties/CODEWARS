//https://www.codewars.com/kata/5708f682c69b48047b000e07

function multiply(number){
    let exp = Math.abs(number).toString().length;
    console.log(exp);
    
    return number * 5**exp;
  }