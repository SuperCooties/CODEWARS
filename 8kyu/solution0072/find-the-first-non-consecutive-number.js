//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    if (arr.length < 2) {
      return null
    } else {
      let value = arr[0];
      for (let i = 1; i < arr.length; i++) {
        let consecutiveness = arr[i] - arr[i-1];
        if (consecutiveness !== 1) {
          return arr[i]
        }
      }
    }
    return null
  }