//https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b){
    //catch negative values and values greater than 255
    function checkValue(n) {
      if (n < 0) {
        return 0;
      } else if (n > 255) {
        return 255;
      } else {
        return n;
      }
    }
    
    r = checkValue(r);
    g = checkValue(g);
    b = checkValue(b);
    
    //convert a single integer to a hexadecimal value
    function convertToHex(n) {
      let hex = Math.abs(n).toString(16).toUpperCase();
      if (n / 16 < 1) {
        hex = '0' + hex;
      }
      return hex;
    }
    
    //convert r, g, and b, combine into a hexadecimal string and return
    let hexResult = convertToHex(r) + convertToHex(g) + convertToHex(b);
    return hexResult;  
  }