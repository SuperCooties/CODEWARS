//https://www.codewars.com/kata/596c6eb85b0f515834000049

var replaceDots = function(str) {
    let newStr = str;
    
    do {
      newStr = newStr.replace('.', '-');
    } while (newStr.includes('.'))
  
    return newStr;
  }