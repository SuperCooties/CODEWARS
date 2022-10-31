//https://www.codewars.com/kata/57a386117cb1f31890000039

function parseF(s) {
    if (isNaN(parseFloat(s))) {
      return null;
    }
    return parseFloat(s);
  }