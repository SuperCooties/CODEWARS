//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
    let resultOfDiffs = 0;
    
    //check if array is empty of only one element
    if (arr.length <= 1) {
      return resultOfDiffs;
    }
    
    //sort numbers in descending order
    arr.sort((a, b) => b - a);
    console.log(arr);
    //perform difference math
    for (let i = 0; i < (arr.length - 1); i++) {
      console.log(`CALCULATING... ${arr[i]} - ${arr[i + 1]}`);
      resultOfDiffs += (arr[i] - arr[i + 1]);
    }
    console.log(`resultOfDiffs ${resultOfDiffs}`);
    return resultOfDiffs
  }