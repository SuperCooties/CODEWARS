//https://www.codewars.com/kata/57a5015d72292ddeb8000b31

function isPalindrome(line) {
    return line.toString() === line.toString().split('').reverse().join('');
  }