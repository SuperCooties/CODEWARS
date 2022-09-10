//https://www.codewars.com/kata/55eea63119278d571d00006a

function nextId(ids){
  
    //Special check for if 0 is missing
    if ((ids.find(e => e === 0)) === undefined){
      return 0;
    }
    
    let i = 1;
    //LOOP UNTIL IT FAILS TO MATCH AN ID
    while (ids.find(e => e === i)) {
      i++
    }
    
    return i;
  }