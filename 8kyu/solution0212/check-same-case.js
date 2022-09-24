//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

function sameCase(a, b){
    console.log(`Testing a: ${a} results ${isLetter(a)}`)
    //check if they are letters
    if (isLetter(a) === false || isLetter(b) === false) {
      return -1;
    }
    
    //check if a is lower
    let aLower = (a === a.toLowerCase());
    
    //check if b is lower
    let bLower = (b === b.toLowerCase());
    
    return (aLower === bLower) ? 1 : 0;
  }
  
  function isLetter(x) {
    if ((x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) || 
        (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)) {
      return true;
    }
    return false;
  }
  