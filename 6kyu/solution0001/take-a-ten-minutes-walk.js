//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    //insert brilliant code here
    //check if walk is 10 minutes or auto fail
    if (walk.length !== 10) {
      return false;
    }
    
    let northSouth = 0;
    let eastWest = 0;
    
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === 'n') {
        northSouth++;
      } else if (walk[i] === 's') {
        northSouth--;
      } else if (walk[i] === 'e') {
        eastWest++;
      } else if (walk[i] === 'w') {
        eastWest--;
      } else {
        console.log(`walk[i] was ${walk[i]} and dodged the if statement`);
      }
    }
    
    if (northSouth === 0 && eastWest === 0) {
      return true;
    } else {
      return false;
    }
  }