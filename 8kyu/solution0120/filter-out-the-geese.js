//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    for (let i = 0; i < birds.length; i++) {
      if (geese.includes(birds[i])) {
        birds.splice(i, 1);
        i--;
      }
    }
    return birds
  };