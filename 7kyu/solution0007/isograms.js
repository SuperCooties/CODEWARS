//https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
    //...
    let isogramResult = true;
    str = str.toLowerCase();
    //split the string into an array
    let strArray = str.split('');
    let letter;
  //   if (str === "") {
  //     isogramResult = true;
  //   }
    //compare it to all the other letters
    //update if there's ever a match
    for (let i = 0; i < strArray.length; i++) {
      letter = strArray[i];
      for (let j = i + 1; j < strArray.length; j++) {
        if (letter === strArray[j]) {
          isogramResult = false;
        }
      }
    }
    
    return isogramResult;
    
    //return the update
  }