//https://www.codewars.com/kata/5547929140907378f9000039

function shortcut (string) {
    return string.split('').filter(str => ((str !== "a") && (str !== "e") && (str !== "i") && (str !== "o") && (str !== "u"))).join('');
  }