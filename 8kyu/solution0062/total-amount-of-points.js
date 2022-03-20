//https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let championshipPoints = 0;
    for (let i = 0; i < games.length; i++) {
      let arr = games[i].split(':');
      championshipPoints += calcPoints(arr);
    }
    return championshipPoints;
  }
  
  function calcPoints(arr){
    if (arr[0] > arr[1]){
      return 3;
    } else if (arr[0] === arr[1]){
      return 1;
    } else {
      return 0;
    }
  }