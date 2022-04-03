//https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let arr = [];
    for (n; n > 0; n--) {
      console.log(`n is ${n}`);
      arr.push(n);
    }
    return arr;
  };