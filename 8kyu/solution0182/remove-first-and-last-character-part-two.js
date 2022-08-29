//https://www.codewars.com/kata/570597e258b58f6edc00230d

function array(arr){

    console.log(typeof arr);
    arr = arr.split(',');
    console.log(typeof arr);
    console.log(`arr: ${arr}`);
    if (arr.length < 3) {
      return null
    }
    arr.pop();
    console.log(`arr: ${arr}`);
    arr.reverse()
    console.log(`arr: ${arr}`);
    arr.pop();
    console.log(`arr: ${arr}`);
    arr.reverse();
    arr = arr.join(' ');
    console.log(`arr: ${arr}`);
    
    
    return arr.toString() //arr.split(',').pop().reverse().pop().reverse().join(' ');
  }
  