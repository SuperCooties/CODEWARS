//https://www.codewars.com/kata/5977618080ef220766000022

function usdcny(usd) {
    const conversionRateCNY = 6.75;
    
    return `${(usd * conversionRateCNY).toFixed(2)} Chinese Yuan`;
  }