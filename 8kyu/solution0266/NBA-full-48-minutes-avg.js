//https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

function pointsPer48(ppg, mpg) {
    const gameLength = 48
    
    if (ppg === 0) {
      return 0;
    }
    
    //find points per minute
    let ppm = ppg / mpg;
    //multiply by points per game (48)
    let maxPoints = Number(ppm * gameLength).toFixed(1);
    console.log(maxPoints);
    console.log(typeof maxPoints);
    return parseFloat(maxPoints);
  }