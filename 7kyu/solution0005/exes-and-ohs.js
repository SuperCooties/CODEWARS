//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    //code here
  let xCount = 0;
  let oCount = 0;
  str = str.toLowerCase();
  
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
      oCount++;
    } else if (str[i] === 'x') {
      xCount++;
    }
  }
  
  if (xCount === oCount) {
    return true;
  }
  return false;
}