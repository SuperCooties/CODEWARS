//https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
    const emptySeats = cap - on;
    if (emptySeats >= wait) {
      return 0
    } else {
      return wait - emptySeats;
    }
  }