//https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

function stairsIn20(s){
    const sundays = s[0].reduce((prev, curr) => prev + curr);
    const mondays = s[1].reduce((prev, curr) => prev + curr);
    const tuesdays = s[2].reduce((prev, curr) => prev + curr);
    const wednesdays = s[3].reduce((prev, curr) => prev + curr);
    const thursdays = s[4].reduce((prev, curr) => prev + curr);
    const fridays = s[5].reduce((prev, curr) => prev + curr);
    const saturdays = s[6].reduce((prev, curr) => prev + curr);
    const oneYear = sundays + mondays + tuesdays + wednesdays + thursdays + fridays + saturdays
    
    return oneYear * 20;
  }