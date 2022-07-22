//https://www.codewars.com/kata/56f695399400f5d9ef000af5

function correctTail(body, tail){  
    let sub = body.substring(body.length-(tail.length));
    
    return (sub === tail) ? true : false
  }