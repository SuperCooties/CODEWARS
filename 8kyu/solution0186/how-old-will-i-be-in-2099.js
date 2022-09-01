//https://www.codewars.com/kata/5761a717780f8950ce001473

function  calculateAge(birthYear, offsetYear) {
    if (birthYear === offsetYear) {
      return "You were born this very year!";
    } else if (birthYear > offsetYear) {
      return `You will be born in ${birthYear - offsetYear} year${(birthYear-offsetYear > 1) ? 's' : ''}.`
    } else if (birthYear < offsetYear) {
      return `You are ${offsetYear - birthYear} year${(offsetYear-birthYear > 1) ? 's' : ''} old.`
    } else {
      return 'Something went wrong!'
    }
    
  }
  
  