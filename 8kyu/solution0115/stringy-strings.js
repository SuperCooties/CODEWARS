//https://www.codewars.com/kata/563b74ddd19a3ad462000054

function stringy(size) {
    let superString = '';
    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        superString += '1'
      } else {
        superString += '0'
      }
    }
    
    return superString;
  }