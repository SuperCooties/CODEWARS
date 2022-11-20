//https://www.codewars.com/kata/572b6b2772a38bc1e700007a

function uniTotal (string) {
    let total = 0;
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].charCodeAt(0);
    }
    return total;
  }