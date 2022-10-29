//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(array) {
    //create array of strings
    let strings = [];
    for (let i = 0; i < array.length; i++) {
      let stringify = array[i].join(',');
      strings.push(stringify);
    }
    
    return strings.join('\n');
    
  }