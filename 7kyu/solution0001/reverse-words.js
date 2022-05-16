//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
    // Go for it
    let words = str.split(' ');
    
    //reverse each individual word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }
  
    //rebuild the silly string
    return words.join(' ');
  }