//https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(numPill, dist, width) {
    if (numPill === 1) {
      return 0;
    }
    
    //convert gaps to centimeters
    let distCM = dist * 100;
    
    //find number of gaps
    let gaps = numPill - 1;
    
    //find number of relevant pillars
    let relevantPillars = numPill - 2;
    
    return (gaps * distCM) + (relevantPillars * width);
  }