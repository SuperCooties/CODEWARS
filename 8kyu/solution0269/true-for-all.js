//https://www.codewars.com/kata/54598d1fcbae2ae05200112c

function all( arr, fun ){
    let result = true;
    console.log(arr);
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
      console.log(`${arr[i]}: ${fun(arr[i])}`)
      if (fun(arr[i]) === false) {
        result = false
      }
      //Had to put this in here because the "Items are not odd" seemed to fail
      if (fun(arr[i]) === 0) {
        result = false;
      }
    }
    return result;
  }