//https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A){
    // r = C / 2pi
    
    const r = (A * 4) / (2 * Math.PI)
    let result = Number(r * r).toFixed(2)
    return Number(result)
  }