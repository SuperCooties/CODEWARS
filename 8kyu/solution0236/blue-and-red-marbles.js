//https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let remainingBlue = blueStart - bluePulled;
    let remainingRed = redStart - redPulled;
    let remainingTotal = remainingBlue + remainingRed;
    
    return remainingBlue / remainingTotal;
  }