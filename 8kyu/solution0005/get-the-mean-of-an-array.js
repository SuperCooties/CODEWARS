function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    
    let total = 0;
    
    for (let i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    return Math.floor(total/marks.length);
  }