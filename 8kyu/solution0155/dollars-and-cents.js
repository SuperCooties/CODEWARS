//https://www.codewars.com/kata/55902c5eaa8069a5b4000083

function formatMoney(amount){
    let formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    
    return formatted.format(amount).split(',').join(''); //couldn't figure out how to get it to drop the comma separators like the tests wanted.
  }
  