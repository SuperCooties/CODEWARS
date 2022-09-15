//https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

function differenceInAges(ages){
    //build new array with [young, old, diff]
    let newArr = [];
    newArr.push(Math.min(...ages));
    newArr.push(Math.max(...ages));
    newArr.push(newArr[1]-newArr[0]);
    
    return newArr
  }
  
    
    