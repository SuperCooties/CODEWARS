//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function even_or_odd(number) {
    number = Math.abs(number);
    if (number % 2 === 0) {
      return "Even";
    } else if (number % 2 === 1) {
      return "Odd";
    } else {
      return "Error";
    }
  }