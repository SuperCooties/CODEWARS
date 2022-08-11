//https://www.codewars.com/kata/57fae964d80daa229d000126

function remove (string) {
    const finalIndex = string.length - 1;
    
    if (string[finalIndex] === "!") {
      string = string.substring(0, finalIndex);
    }
    
    return string
  }