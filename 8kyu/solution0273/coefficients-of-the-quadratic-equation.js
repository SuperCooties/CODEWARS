//https://www.codewars.com/kata/5d59576768ba810001f1f8d6

function quadratic(x1, x2){
  
    //(x - x1) * (x - x2) = 0
    
    //FOIL IT 
    
    //FIRST
    let first = 1; //not actually used
    //OUTSIDE
    let outside = x2 * -1;
    //INSIDE
    let inside = x1 * -1;
    //LAST
    let last = x1 * x2;
    
    return [1, outside + inside, last];
  }