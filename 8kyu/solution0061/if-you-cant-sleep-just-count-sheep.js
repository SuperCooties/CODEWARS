//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
    let murmur = "";
    
    for (i = 1; i <= num; i++){
      murmur = murmur + `${i} sheep...`;
    }
    
    return murmur;
  }