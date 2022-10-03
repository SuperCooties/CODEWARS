//https://www.codewars.com/kata/557b5e0bddf29d861400005d

function converter (mpg) {
    const galToLitre = 4.54609188;
    const mileToKM = 1.609344;
    
    let unit = 0;
    let fuel = 0;
    
    unit = mpg; //current mpg
    fuel = 1; //1 gallon
    
    fuel = fuel * galToLitre;
    unit = unit * mileToKM;
    
    fuel = fuel / galToLitre;
    unit = unit / galToLitre;
    
    return Number(unit.toFixed(2));
  }