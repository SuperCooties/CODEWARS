//https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
    //Make an empty string for each possible digit.
    let exist1 = '';
    let exist2 = '';
    let exist3 = '';
    let exist4 = '';
    let exist5 = '';
    let exist6 = '';
    let exist7 = '';
    let exist8 = '';
    let exist9 = '';
    
    //Travel through all the given values, each time a digit is discovered, activate that digit's variable
    for (i = 0; i < values.length; i++) {
      switch (values[i]) {
          case 1: exist1 = '1'; break;
          case 2: exist2 = '2'; break;
          case 3: exist3 = '3'; break;
          case 4: exist4 = '4'; break;
          case 5: exist5 = '5'; break;
          case 6: exist6 = '6'; break;
          case 7: exist7 = '7'; break;
          case 8: exist8 = '8'; break;
          case 9: exist9 = '9'; break;
      }
    }
    
    //string all the variables together and turn it into a number
    return Number(exist1 + exist2 + exist3 + exist4 + exist5 + exist6 + exist7 + exist8 + exist9);
    
  }