//https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
    let arr = []
    
    for (let i = 0; i <= n; i++) {
      arr.push(2**i);
    }
    
    return arr
  }