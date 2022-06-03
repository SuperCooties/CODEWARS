//https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    //$40 per day
    let cost = 40 * d;
    let discount = 0;
    
    if (d >= 7){
    //$50 discount if at least 7 days
      discount = 50;
    } else if (d >= 3) {
    //$20 discount if at least 3 days
      discount = 20;
    }
    
    return cost - discount;  
  }