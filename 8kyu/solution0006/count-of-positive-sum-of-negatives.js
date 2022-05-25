function countPositivesSumNegatives(input) {
    let newArr = [0, 0];
    
    if ((input === null) || (input.length === 0)) {
      return newArr = [];
    }
  
    
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        newArr[0]++;
      } else {
        newArr[1] += input[i];
      }
    }
    
    return newArr;
  }