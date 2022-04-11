function maps(x){
    let arr = [];
    
    x.forEach((element, index) => {
      arr[index] = element * 2;
    })
    
    return arr;
  }