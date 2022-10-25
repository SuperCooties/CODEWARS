//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

function shortenToDate(longDate) {
    let arr = longDate.split(' ');
    let weekday = arr[0];
    let month = arr[1];
    let day = parseInt(arr[2]);
    let result = [weekday, month, day];
    
    return result.join(' ');
  }