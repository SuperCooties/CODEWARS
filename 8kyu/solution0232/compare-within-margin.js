//https://www.codewars.com/kata/56453a12fcee9a6c4700009c

function closeCompare(a, b, margin){
  
    //set margin to 0 if undefined
    margin = margin || 0;
    
    //check if a is close to b (margin)
    if (Math.abs(a - b) <= margin) {
      return 0
    }
    
    //if a < b return -1
    //if a > b return 1
    return (a < b) ? -1 : 1  
  }
  