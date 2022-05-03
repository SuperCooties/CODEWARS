//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      arr[i] > 0 ? sum += arr[i] : sum = sum;
    }
    return sum;
  }