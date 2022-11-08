//https://www.codewars.com/kata/58dced7b702b805b200000be

function distanceBetweenPoints(a, b) {
    //find x distance
    let x = Math.abs(a.x - b.x);
    //find y distance
    let y = Math.abs(a.y - b.y);
    
    //PYTHAG IT
    let result = Math.sqrt((x*x) + (y*y));
    
    return result;
  }