//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
    let words = string.split(' '); //split the string into an array of words
    let spunString = '';
    
    for (let i = 0; i < words.length; i++){ //traverse each word in the string
      if (words[i].length >= 5){ //if an individual word is five characters or greater, SPIN IT
        console.log(`SPIN THIS WORD: ${words[i]}`);
        let spunWord = '';
        for (let j = words[i].length - 1; j >= 0; j--) {
          console.log(words[i][j]);
          spunWord += words[i][j];
        }
        spunString += spunWord + ' ';
      } else {
        console.log(`DON'T SPIN THIS WORD: ${words[i]}`);
        spunString += words[i] + ' ';
      }
    }
    
    return spunString.trim();
  }