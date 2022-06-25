//https://www.codewars.com/kata/57d814e4950d8489720008db

function index(array, n){
    if (n >= array.length){
      return -1
    }
    
    return array[n]**n;
  }