//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function() {
    let newStr = this;
    newStr = newStr.split('');
    
    for (let i = 0; i < newStr.length; i++){
      if (newStr[i].toUpperCase() !== newStr[i]){
        return false;
      }
    }
    return true;
  }