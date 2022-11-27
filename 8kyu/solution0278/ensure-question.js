//https://www.codewars.com/kata/5866fc43395d9138a7000006

function ensureQuestion(s) {
    if (s.length < 1) {
      return '?'
    }
    
    if (s[s.length-1] === '?') {
      return s;
    } else {
      return `${s}?`
    }
  }