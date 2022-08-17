//https://www.codewars.com/kata/570a6a46455d08ff8d001002

function noBoringZeros(n) {
  
    //check for a regular zero
    if (n === 0) {
      return 0
    }
    
    
    //convert the number to string for manipulation
    let strNum = n.toString();
    
    //separate the characters into an array
    strNum = strNum.split('');
    
    //check the end of the array for zeroes, remove until there are no more zeroes at the end
    console.log(`strNum: ${strNum}`);
    console.log(`strNum[strNum.length-1]: ${strNum[strNum.length-1]}`);
    while (strNum[strNum.length-1] === '0') {
      strNum.pop();
    }
    
    //rejoin the array
    console.log(typeof strNum);
    console.log(strNum);
    strNum = strNum.join('');
    
    //convert back to number and return
    return parseInt(strNum);
  }