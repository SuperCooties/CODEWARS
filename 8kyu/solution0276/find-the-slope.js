//https://www.codewars.com/kata/55a75e2d0803fea18f00009d

function slope(points){
    //assign points for ease of reading
    const x1 = points[0];
    const y1 = points[1];
    const x2 = points[2];
    const y2 = points[3];
    
    //check for flat
    if (x1 === x2){
      return 'undefined';
    }
  
    let result = (y2 - y1) / (x2 - x1);
    console.log(`${result} stringifies as ${result.toString()}`);
    return result.toString();
    
  }