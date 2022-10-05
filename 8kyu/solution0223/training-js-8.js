//https://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month){
    var days;
    switch (true){
      case (month === 1): return 31;
      case (month === 2): return 28;
      case (month === 3): return 31;
      case (month === 4): return 30;
      case (month === 5): return 31;
      case (month === 6): return 30;
      case (month === 7): return 31;
      case (month === 8): return 31;
      case (month === 9): return 30;
      case (month === 10): return 31;
      case (month === 11): return 30;
      case (month === 12): return 31;
    }
    return days;
  }