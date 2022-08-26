//https://www.codewars.com/kata/56530b444e831334c0000020

function chromosomeCheck(sperm) {
    let arr = sperm.split('');
    
    return (arr[0] === arr[1]) ? 
          "Congratulations! You're going to have a daughter." : 
          "Congratulations! You're going to have a son."
  }