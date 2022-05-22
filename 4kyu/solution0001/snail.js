//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function(array) {
    // enjoy
    
    //initializing variables
    let arrayX = 0; //tracks X location
    let arrayY = 0; //tracks Y location
    let snailIndex = 0; //tracks current index of snailArray
    let snailArray = []; //create empty snailArray
    let nextDirection = 'right';
    let nextDistance = array[0].length; //choosing the length of the inner array since an array with an empty array gives length 0.
    
    //total traversals = length * 2 - 1;
    let runs = array[0].length * 2 - 1;
    if (runs < 0) {
      runs = 0;
    }
    
    //traverse(x, y, distance, direction);
    function traverse(x, y, distance, direction) {
      for (let j = 0; j < distance; j++) {
        snailArray[snailIndex] = array[x][y];
        snailIndex++;
        switch (direction) {
            case 'right': y++; arrayY++; break;
            case 'down': x++; arrayX++; break;
            case 'left': y--; arrayY--; break;
            case 'up': x--; arrayX--; break;
        }
      }
      
    }
    
    //total runs required calculated based on size of square. traverse function then called over and over to spiral
    for (let i = 0; i < runs; i++) {
      traverse(arrayX, arrayY, nextDistance, nextDirection);
      switch (nextDirection) {
        case 'right': arrayX++; arrayY--; nextDirection = 'down'; nextDistance--; break;
        case 'down': arrayY--; arrayX--; nextDirection = 'left'; break;
        case 'left': arrayX--; arrayY++; nextDirection = 'up'; nextDistance--; break;
        case 'up': arrayY++; arrayX++; nextDirection = 'right'; break;
      }
    }
  
    return snailArray;
  }