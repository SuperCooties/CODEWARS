//https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
    let str = this;
    let newStr = str.split('');
    
    for (let i = 0; i < newStr.length; i++) {
      if (isLower(newStr[i])) {
        newStr[i] = newStr[i].toUpperCase();
      } else if (isUpper(newStr[i])) {
        newStr[i] = newStr[i].toLowerCase();
      }
    }
    newStr = newStr.join('');
    return newStr;
  }
  
  
  //charcode 65-90 is upper
  //charcode 97-122 is lower
  function isLower(x) {
    return (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
  }
  
  function isUpper(x) {
    return (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)
  }