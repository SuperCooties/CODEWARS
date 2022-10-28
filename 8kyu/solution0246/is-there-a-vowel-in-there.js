//https://www.codewars.com/kata/57cff961eca260b71900008f

function isVow(a){
    let results = swapper(a, 97); //find the a (97);
    results = swapper(results, 101);
    results = swapper(results, 105);
    results = swapper(results, 111);
    results = swapper(results, 117);
    
    return results;
  }
  
  function swapper(arr, value){
    while (arr.includes(value)) {
      arr.splice(arr.indexOf(value), 1, String.fromCharCode(value));
    }
    return arr;
  }
  