//https://www.codewars.com/kata/5951d30ce99cf2467e000013

function isPythagoreanTriple(integers) {
    let sortedInts = integers.sort(function(a, b) {
      return a - b;
    });
    console.log(sortedInts);
    
    return (sortedInts[0]**2 + sortedInts[1]**2) === sortedInts[2]**2
  }
  