//https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

function nearestSq(n){
    let sqrBelow = 0;
    let sqrAbove = 0;
    
    console.log(`Testing for ${n}`);
    
    //check if n is a sqrt
    if (Number.isInteger(Math.sqrt(n))) {
      return n
    }
    
    //find closest sqrt below n
    do {
      sqrBelow++;
      //console.log(`sqrBelow: ${sqrBelow}, Sqrt? ${n - sqrBelow}: ${Number.isInteger(Math.sqrt(n - sqrBelow))}`)
    } while (!Number.isInteger(Math.sqrt(n - sqrBelow)))
      
    //find closest sqrt above n
    do {
      sqrAbove++;
      //console.log(`sqrAbove: ${sqrAbove}, Sqrt? ${n + sqrAbove}: ${Number.isInteger(Math.sqrt(n + sqrAbove))}`)
    } while (!Number.isInteger(Math.sqrt(n + sqrAbove)))
    
    //compare which is closer
      if (sqrAbove > sqrBelow) {
        return n - sqrBelow;
      } else {
        return n + sqrAbove;
      }
  }