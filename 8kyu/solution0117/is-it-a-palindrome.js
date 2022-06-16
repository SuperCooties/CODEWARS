//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let reversed = x.split('').reverse().join('');
    console.log(`x1: ${x}`);
    console.log(`x2: ${reversed}`);
    
    return (x.toLowerCase() === reversed.toLowerCase())
  }