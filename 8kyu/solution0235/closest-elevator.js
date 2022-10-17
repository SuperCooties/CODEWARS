//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a

function elevator(left, right, call){
    let isLeftCloser = (Math.abs(call - left) < Math.abs(call - right));
    return isLeftCloser ? 'left' : 'right'
  }