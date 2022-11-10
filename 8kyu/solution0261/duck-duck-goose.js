//https://www.codewars.com/kata/582e0e592029ea10530009ce

function duckDuckGoose(players, goose) {
    let target = 0;
    
    if (goose <= players.length) {
      target = goose - 1;
    } else {
      target = (goose % players.length) - 1;
      if (target === -1) {
        target = 9;
      }
    }
    
    return players[target].name;
  }