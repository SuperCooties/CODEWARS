function abbrevName(name){
    let names = name.split(' ');
    names[0] = names[0][0].toUpperCase();
    names[1] = names[1][0].toUpperCase();
    return names.join('.');
      // code away
  
  }