//https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
    Array.prototype.sortNormal = function(){return this.sort(function(a,b){return a - b})}
  
    let combo = arr1.concat(arr2).sortNormal();
    let cleanCombo = [...new Set(combo)];
    
    return cleanCombo;
  }