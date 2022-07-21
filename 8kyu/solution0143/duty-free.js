//https://www.codewars.com/kata/57e92e91b63b6cbac20001e5

function dutyFree(normPrice, discount, hol){
    let purchases = 0;
    const savings = normPrice * discount / 100;
    
    purchases = hol / savings;
    
    return Math.floor(purchases);
    
  }