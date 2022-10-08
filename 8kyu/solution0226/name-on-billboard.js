//https://www.codewars.com/kata/570e8ec4127ad143660001fd

function billboard(name, price = 30){
    name = name.split('');
    let cost = 0;
    
    for (let i = 0; i < name.length; i++) {
      cost += (price || 30);
    }
    
    return cost;
    
  } 