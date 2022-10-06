//https://www.codewars.com/kata/55ccdf1512938ce3ac000056

function isLockNessMonster(s) {
    let result = false;
    
    if (s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')) {
      result = true;
    }
    
    return result;
  }