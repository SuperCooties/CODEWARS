function countSheeps(arrayOfSheep) {
    let sum = 0;
        
    arrayOfSheep.forEach(x => x ? sum++ : console.log('false'));
                         
    return sum;
  }