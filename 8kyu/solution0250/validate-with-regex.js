//https://www.codewars.com/kata/56a25ba95df27b7743000016

function validateCode (code) {
    code = code.toString();
    console.log(code[0])
    return (code[0] === '1' || code[0] === '2' || code[0] === '3')
  
  }