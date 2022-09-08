//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

function arrayMadness(a, b) {
    let aSquared = 0;
    let bCubed = 0;
    
    for (let i = 0; i < a.length; i++){
      aSquared += a[i]*a[i];
    }
    
    for (let i = 0; i < b.length; i++){
      bCubed += b[i] * b[i] * b[i];
    }
    
    return aSquared > bCubed;
  }