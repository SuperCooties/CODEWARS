//https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str,n){
    let padding = 0;
    while (padding < n) {
      if (padding % 2 === 0) {
        str = "*" + str;
      } else {
        str = str + "*";
      }
      padding++;
    }
    return str;
  }