//https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    let newStr = '';
    let oldStr = str.split('');
    
    for (let i = 0; i < oldStr.length; i++) {
      newStr += oldStr[i];
      newStr += oldStr[i];
    }
    
    return newStr;
  }
  