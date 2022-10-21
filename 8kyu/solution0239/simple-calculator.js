//https://www.codewars.com/kata/5810085c533d69f4980001cf

function calculator(a,b,sign){
    const errorMsg = 'unknown value';
    
    //error checking
    if (!(sign === '+' || sign === '-' || sign === '*' || sign === '/')) {
      console.log(`sign is invalid: ${sign}`);
      return errorMsg;
    }
    if (!Number.isInteger(a)) {
      console.log(`value A is invalid: ${a}`)
      return errorMsg;
    }
    
    if (!Number.isInteger(b)) {
      console.log(`value B is invalid: ${b}`)
      return errorMsg;
    }
    
    switch (sign) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return errorMsg;
    }  
  
  }