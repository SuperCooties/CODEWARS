function squareSum(numbers){
    let sum = 0;
    numbers.forEach((element, index, array) => sum += Math.pow(element, 2));
    return sum;
  }