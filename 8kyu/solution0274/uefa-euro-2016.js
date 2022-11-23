//https://www.codewars.com/kata/57613fb1033d766171000d60

function uefaEuro2016(teams, scores){
    let result = '';
    
    if (scores[0] < scores[1]) {
      result = `${teams[1]} won!`;
    } else if (scores[0] > scores[1]) {
      result = `${teams[0]} won!`;
    } else {
      result = `teams played draw.`;
    }
  
    return `At match ${teams[0]} - ${teams[1]}, ${result}`
  }
  