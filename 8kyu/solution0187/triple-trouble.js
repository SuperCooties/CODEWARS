//https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three){
    let result = []
    one = one.split('');
    two = two.split('');
    three = three.split('');
    
    for (let i = 0; i < one.length; i++) {
      result.push(one[i]);
      result.push(two[i]);
      result.push(three[i]);
    }
    
    return result.join('');
   }