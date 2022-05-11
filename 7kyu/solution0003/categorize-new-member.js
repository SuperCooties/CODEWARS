//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    // ...
    let output = []; //initialize our empty array;
    
    for (i = 0; i < data.length; i++) {
      let age = data[i][0]; //grab just the age
      let handicap = data[i][1]; //grab just the handicap
      if (age >= 55 && handicap > 7) {
        output.push('Senior');
      } else {
        output.push('Open');
      }
    }
    
    return output;
    
  }