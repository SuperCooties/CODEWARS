//https://www.codewars.com/kata/57126304cdbf63c6770012bd

function isDigit(s) {
    if (s === ' ' || s === '') {
      return false;
    }
    console.log(`Number verdict ${s}: ${!isNaN(s)}`);
    return !isNaN(s)
  }