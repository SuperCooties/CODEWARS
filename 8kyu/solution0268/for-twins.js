//https://www.codewars.com/kata/59c287b16bddd291c700009a

function iceBrickVolume(radius, bottleLength, rimLength) {
    //find one side of square face
    // a^2 + b^2 = c^2
    // radius^2 + radius^2 = squareSide^2
    
    let squareSide = Math.sqrt(radius**2 + radius**2);
    console.log(`radius: ${radius}; squareSide: ${squareSide}`);
    
    let blockHeight = bottleLength - rimLength;
    
    return Math.round(squareSide * squareSide * blockHeight);
  }