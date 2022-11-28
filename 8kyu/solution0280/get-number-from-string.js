//https://www.codewars.com/kata/57a37f3cbb99449513000cd8

function getNumberFromString(s) {
    console.log(`converting... ${s}`);
    s = s.replace(/[^0-9]/g, '');
    console.log(`result... ${s}`);
    return parseInt(s);
  }