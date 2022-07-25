//https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip=(d, a)=>{
    let numArray = a;
  
    if (d === "R") {
      numArray.sort(function(a, b) {
        return a - b;
      });
    } else {
      numArray.sort(function(a, b) {
        return b - a;
      });
    }
    return numArray;
  }
  