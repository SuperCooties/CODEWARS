//https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x){
    let goodValue = 'good';
    let badValue = 'bad';
    let goods = 0;
    let bads = 0;
    
    for (let i = 0; i < x.length; i++){
      if (x[i] === goodValue){
        goods++;
      } else if (x[i] === badValue){
        bads++;
      } else {
        console.log('They threw a curve in here!');
      }
    }
    
    if (goods > 2) {
      return 'I smell a series!';
    } else if (goods > 0) {
      return 'Publish!';
    } else {
      return 'Fail!';
    }
  }