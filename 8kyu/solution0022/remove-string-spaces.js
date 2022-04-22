function noSpace(x){
    let str = x.split('');
    str.forEach((x, i) => {x === ' ' ? str[i] = '' : console.log('Y')});
    str = str.join('');
    return str;
    
    //wanted to use: return x.replaceAll(' ', '');
    //but output said the .replaceAll() function didn't exist
  }