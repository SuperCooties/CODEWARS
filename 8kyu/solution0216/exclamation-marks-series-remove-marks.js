//https://www.codewars.com/kata/57faece99610ced690000165

function remove (string) {  
    let arr = string.split('');
    while (arr[arr.length - 1] === '!') {
      arr.pop();
    }
    return arr.join('');
  }