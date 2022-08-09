//https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth) {
    let results = [];
    
    //calculate area
    results.push((width * height * 2) + (width * depth * 2) + (height * depth * 2));
    
    //calculate volume
    results.push(width * height * depth);
    
    return results
    
  }
  