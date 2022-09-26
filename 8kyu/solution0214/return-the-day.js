//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

function whatday(num) { 
    switch(true){
      case (num === 1): {return "Sunday"}
      case (num === 2): {return "Monday"}
      case (num === 3): {return "Tuesday"}
      case (num === 4): {return "Wednesday"}
      case (num === 5): {return "Thursday"}
      case (num === 6): {return "Friday"}
      case (num === 7): {return "Saturday"}
      default: {return "Wrong, please enter a number between 1 and 7"}
    }
  }