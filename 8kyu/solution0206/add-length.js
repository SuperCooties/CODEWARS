//https://www.codewars.com/kata/559d2284b5bb6799e9000047

function addLength(str) {
    let arr = str.split(' ');
    
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + ' ' + arr[i].length;
    }
    
    return arr;
  }
  