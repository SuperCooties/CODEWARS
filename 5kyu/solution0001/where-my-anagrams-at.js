//https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {

    //function to alphabetize a given word
    function sortWord(str) {
      return str.split('').sort().join('');
    }
    
    //compare target word with first word in array
    let i = 0;
    while (i < words.length) {
      if (sortWord(word) === sortWord(words[i])) {
        i++;
      } else {
        words.splice(i, 1);
      }
    }
    return words;
  }