//https://www.codewars.com/kata/57241e0f440cd279b5000829

function sumMul(n,m){
    let sum = 0;
    let increment = n;
    
    if (m <= n) {
      return 'INVALID'
    }
    
    while (n < m) {
      sum += n;
      n += increment;
    }
    
    return sum;
  }