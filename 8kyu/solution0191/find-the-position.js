//https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter){
    let position = letter.toLowerCase().charCodeAt() - 96
    
    return `Position of alphabet: ${position}`
  }