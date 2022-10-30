//https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price){
    let pricePerThree = price * 2;
    let looseMangoes = quantity % 3;
    let mangoBundles = Math.floor(quantity / 3);
    return (mangoBundles * pricePerThree) + (looseMangoes * price)
  }