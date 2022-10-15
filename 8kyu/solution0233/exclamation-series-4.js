//https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

function remove (string) {
  
    let str = string.split('');
    while (str.includes('!')) {
      str = str.join('');
      str = str.replace('!', '');
      str = str.split('');
    }
    
    str.push('!')
    str = str.join('')
    
    return str;  
  }