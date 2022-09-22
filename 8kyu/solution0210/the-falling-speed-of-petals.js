//https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b

function sakuraFall(v) {
    let distanceToGround = 400;
    
    //special cases
    if (v === Infinity || v <= 0) {
      return 0;
    }
    
    return distanceToGround / v;
  }