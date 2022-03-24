//https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
    let winner = "Draw!";
    
    if (p1 === p2) {
      return winner;
    } 
    
    switch (p1){
        case 'rock':
          switch (p2) {
              case 'paper': winner = setWinner('2'); break;
              case 'scissors' : winner = setWinner('1'); break;
          } break;
        case 'scissors':
          switch (p2) {
              case 'rock': winner = setWinner('2'); break;
              case 'paper': winner = setWinner('1'); break;
          } break;
        case 'paper':
          switch (p2) {
              case 'scissors': winner = setWinner('2'); break;
              case 'rock': winner = setWinner('1'); break;
          } break;
        default: console.log('Something went wrong!');
    }
    
    return winner;
    
  };
  
  function setWinner(playerNum){
    return `Player ${playerNum} won!`;
  }