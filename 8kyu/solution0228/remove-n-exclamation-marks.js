//https://www.codewars.com/kata/57faf7275c991027af000679

function remove(s,n){
  
  
    for (let i = 0; i < n; i++) {
      s = s.replace('!', '');
    }
    
    return s;
  }