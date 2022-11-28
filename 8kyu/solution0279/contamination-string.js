//https://www.codewars.com/kata/596fba44963025c878000039

function contamination(text, char){
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += char;
    }
    
    return result;
  }