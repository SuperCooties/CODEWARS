//https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
    if (findPercentage(rating) === 100) {
      return 'Rating not recognised';
    }
    let tip = amount * findPercentage(rating);
    return Math.ceil(tip);
  }
  
  function findPercentage(rating){
    if (rating.toLowerCase() === 'terrible') {
      return 0
    } else if (rating.toLowerCase() === 'poor') {
      return 0.05
    } else if (rating.toLowerCase() === 'good') {
      return 0.10
    } else if (rating.toLowerCase() === 'great') {
      return 0.15
    } else if (rating.toLowerCase() === 'excellent') {
      return 0.20
    } else {
      return 100
    }
  }