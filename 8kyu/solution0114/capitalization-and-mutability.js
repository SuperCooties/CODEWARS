//https://www.codewars.com/kata/595970246c9b8fa0a8000086

function capitalizeWord(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    return word;
  }