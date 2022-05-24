function past(h, m, s){
    //#Happy Coding! ^_^
    h = h * 60 //convert h to minutes
    h = h * 60 //convert h to seconds
    h = h * 1000 //convert h to milliseconds
    
    m = m * 60 //convert m to seconds
    m = m * 1000 //convert m to milliseconds
    
    s = s * 1000 //convert s to milliseconds
    
    let milliseconds = h + m + s
    
    return milliseconds;
  }