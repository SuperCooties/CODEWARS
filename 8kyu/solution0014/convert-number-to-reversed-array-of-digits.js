function digitize(n) {
    n = n.toString().split('').reverse();
    console.log(n);
    for (let i = 0; i < n.length; i++){
      n[i] = parseInt(n[i]);
    }
    return n;
  }