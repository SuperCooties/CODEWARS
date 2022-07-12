//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
    const frontOfLine = queue.length - 1;
    const wolfIndex = queue.findIndex((element) => element === "wolf");
    const endangeredSheep = queue.length - wolfIndex - 1;
      
    if (wolfIndex === frontOfLine) {
      return "Pls go away and stop eating my sheep";
    } else {
      return `Oi! Sheep number ${endangeredSheep}! You are about to be eaten by a wolf!`
    }
    
  }