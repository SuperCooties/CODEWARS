//https://www.codewars.com/kata/571d42206414b103dc0006a1

function arr(N) {
    let array = []
    if (N === undefined) {
      return array;
    } else {
      for (let i = 0; i < N; i++) {
        array.push(i);
      }
    }
    return array;
  }