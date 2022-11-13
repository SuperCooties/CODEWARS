//https://www.codewars.com/kata/58d248c7012397a81800005c

var cubeChecker = function(volume, side){
    console.log(`Testing... volume: ${volume}; side: ${side}; side^3: ${side*side*side}`)
    //error handling
    if (volume <= 0 || side <= 0) {
      return false;
    }
    return (volume === (side * side * side));
  };