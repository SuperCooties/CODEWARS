//https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  
  
    let result = ''; //initialize the result string
  
    num = num.toString() //convert num to a string so we can traverse each digit like an array 
    
    for (i = 0; i < num.length; i++){
      let power = Number(num[i])*Number(num[i]); //square the digit and place it in a variable
      result = result + power.toString(); //convert the result to a string and append it to result variable
    }
    
    result = Number(result); //convert result string to number before returning
    
    return result;  
  
  }